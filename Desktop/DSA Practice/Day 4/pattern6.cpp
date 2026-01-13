#include <iostream>
using namespace std;

int main()
{

    // We have to print
    // 123
    // 456
    // 789

    // int n=9;

    // int i=1;

    // while(i<=n)
    // {
    //     int j=1;
    //     while(j<=3)
    //     {
    //         cout<<i;
    //         j++;
    //         i++;
    //     }
    //     cout<<endl;

    // }

    //  OR M-2

    // int n = 6;
    // int i = 0;

    // while (i <= n)
    // {

    //     int j = 1;
    //     while (j <= 3)
    //     {
    //         cout << i + j;
    //         j++;
    //     }
    //     cout << endl;
    //     i = i + 3;
    // }

    int n;
    cin >> n;

    int i = 1;
    int count = 1;
    while (i <= n)
    {
        int j=1;
        while(j<=n){
            cout<<count<<" ";
            count++;
            j++;
        }
        cout<<endl;
        i++;
    }
}