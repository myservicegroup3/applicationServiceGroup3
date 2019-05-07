#include<iostream>
#include<cstring>
#include<cctype>
using namespace std;
const int n=208;
char cleartext[n],keyword[n],res1[n],res2[n],map[30][30];

void trans(char s[]);
void encrypt(char cleartext[],char keyword[]);
void decrypt(char cleartext[],char keyword[]);

int main()
{
    int op;
    for(int i=0;i<26;i++)
        for(int j=0;j<26;j++)
            map[i][j]='a'+(i+j)%26;
    cout<<"Please input your cleartext:"<<endl;
    gets(cleartext);
    cout<<"Please input your keyword:"<<endl;
    cin>>keyword;
    cout<<"Please input your operation(1:encrypt 2:decrypt):"<<endl;
    cin>>op;
    if(op==1)
    {
        encrypt(cleartext,keyword);
        cout<<res1<<endl;
    }
    else if(op==2)
    {
        decrypt(cleartext,keyword);
        cout<<res2<<endl;
    }
    else
        cout<<"Input error!!!"<<endl;
    return 0;
}

void encrypt(char cleartext[],char keyword[])
{
    int clr_len=strlen(cleartext);
    int key_len=strlen(keyword);
    int j;
    for(int i=0,j=0;i<clr_len;i++)
    {
        if(!isalpha(cleartext[i]))
        {
            res1[i]=cleartext[i];
            continue;
        }
        char t=map[tolower(cleartext[i])-'a'][tolower(keyword[j%key_len])-'a'];
        if(islower(cleartext[i]))
            res1[i]=t;
        else if(isupper(cleartext[i]))
            res1[i]=toupper(t);
        j++;
    }
}

void decrypt(char cleartext[],char keyword[])
{
    int clr_len=strlen(cleartext);
    int key_len=strlen(keyword);
    int j;
    for(int i=0,j=0;i<clr_len;i++)
    {
        if(!isalpha(cleartext[i]))
        {
            res2[i]=cleartext[i];
            continue;
        }
        char t=map[tolower(cleartext[i])-'a'][26-(tolower(keyword[j%key_len])-'a')];
        if(islower(cleartext[i]))
            res2[i]=t;
        else if(isupper(cleartext[i]))
            res2[i]=toupper(t);
        j++;
    }
}
