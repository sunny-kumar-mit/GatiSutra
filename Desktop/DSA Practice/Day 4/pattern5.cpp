#include <iostream>
using namespace std;

int main()
{
    // We have to print
    // 321
    // 321
    // 321
    int n = 3;

    int i = 1;

    while (i <= n)
    {
        int j = 3;
        while (j >= 1)
        {
            cout << j;
            j = j - 1;
        }

        cout<<endl;
        i=i+1;
    }
}