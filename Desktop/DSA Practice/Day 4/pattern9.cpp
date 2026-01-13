#include <iostream>
using namespace std;

int main(){

    // We have to print
//   1
//   23
//   456
//   78910


    int n;
    cin>>n;

    int count=1;
    int row=1;

    while(row<=n)
    {
        int col=1;
        while(col<=row)
        {
            cout<<count<<" ";
            count++;
            col++;
        }
        cout<<endl;
        row++;
    }


}