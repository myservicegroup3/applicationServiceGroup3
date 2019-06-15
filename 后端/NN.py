
import torch
import torch.nn.functional as F

n_data = torch.ones(300, 2)
x0 = torch.normal(2*n_data, 1)      
y0 = torch.zeros(300)               
x1 = torch.normal(-2*n_data, 1)    
y1 = torch.ones(300)
xx = torch.ones(300,1) 
xxx = -1*xx
x23 = torch.cat((xx,xxx),1).type(torch.Tensor) 
x2 = torch.normal(2*x23, 1) 
y2 = y1 *2
x3 = torch.normal(-2*x23, 1) 
y3 = y1 *3        
x = torch.cat((x0, x1,x2,x3), 0).type(torch.FloatTensor)  
y = torch.cat((y0, y1,y2,y3), ).type(torch.LongTensor)    
# print(x)
# print('-------------------------------------------------')
#print(y)



class Net(torch.nn.Module):
    def __init__(self, n_feature, n_hidden, n_hidden1,n_hidden2,n_output):
        super(Net, self).__init__()
        self.hidden = torch.nn.Linear(n_feature, n_hidden) 
        self.hidden1 = torch.nn.Linear(n_hidden,n_hidden1)
        self.hidden2 = torch.nn.Linear(n_hidden1,n_hidden2)
        self.out = torch.nn.Linear(n_hidden2, n_output)   

    def forward(self, x):
        x = F.relu(self.hidden(x))     
        x = F.relu(self.hidden1(x)) 
        x = F.relu(self.hidden2(x)) 
        x = self.out(x)
        return x

net = Net(n_feature=2, n_hidden=10,n_hidden1 = 20, n_hidden2 = 10,n_output=4)   
print(net)  

optimizer = torch.optim.SGD(net.parameters(), lr=0.05)
loss_func = torch.nn.CrossEntropyLoss()  

  

for t in range(1000):
    out = net(x)    
    loss = loss_func(out, y)     
    optimizer.zero_grad()   
    loss.backward()         
    optimizer.step()      
    print(loss)

t = torch.ones(1,2)
tt = net(t)
n = F.softmax(tt,dim=1)
print()
print(n)
