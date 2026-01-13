#include <iostream>
using namespace std;

int main(){

    // We have to print
    // 1
    // 22
    // 333
    // 4444

    int n=4;
    int row=1;

    while(row<=n)
    {
        int col=1;
        while(col<=row)
        {
            cout<<row;
            col++;
        }
        cout<<endl;
        row++;
    }

}