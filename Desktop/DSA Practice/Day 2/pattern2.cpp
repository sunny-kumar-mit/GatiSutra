#include <iostream>
using namespace std;

int main()
{

    // we have to print
    // 111
    // 222
    // 333

    int n;
    cout<<"Enter any No";
    cin >> n;

    int i = 1;

    while (i <= n)
    {
        int j = 1;
        while (j <= n)
        {
            cout << i;
            j = j + 1;
        }
        cout<<endl;
        i=i+1;
    }
}
