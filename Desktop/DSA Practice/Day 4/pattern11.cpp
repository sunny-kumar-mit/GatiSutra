#include <iostream>
using namespace std;

int main()
{

    // We have to print
    // 1
    // 21
    // 321
    // 4321

    int n = 4;
    int row = 1;

    while (row <= 4)
    {
        int col = 1;
        // int value=row;
        while (col <= row)
        {
            cout << row - col + 1 << " ";

            col++;
        }
        cout << endl;
        row++;
    }
}