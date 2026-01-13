#include <iostream>
using namespace std;

int main(){

    // We have to print
// 1
// 23
// 345
// 4567

int n;
cin>>n;

int row=1;

while(row<=n)
{
    int col=1;
    while(col<=row)
    {
        cout<<row+col-1<<" ";
        // row++;
        col++;
    }
    cout<<endl;
    row++;
}



}