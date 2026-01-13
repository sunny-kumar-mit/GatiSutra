#include <iostream>
using namespace std;

int main()
{

    // We have to print
    // *
    // **
    // ***
    // ****

    int n = 4;

    int i = 1;

    while (i <= n)
    {
        int j = 1;
        while (j <= i)
        {
            cout << "* ";
            j++;
        }
        cout << endl;
        i++;
    }
}