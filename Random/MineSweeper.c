#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int calcMines(int x, int y, int height, int width, int **grid)
{
    int sum = 0;
    for (int i = -1; i <= 1; i++) {
        int xPos = x + i;
        if(xPos < 0 || xPos >= height)
        {
            continue;
        }
        for (int j = -1; j <= 1; j++) {
            int yPos = y + j;
            if(yPos < 0 || yPos >= width)
            {
                continue;
            }
            if(grid[xPos][yPos] == 1)
            {
                sum++;
            }
        }
    }
    return sum;
}

int main()
{
    int width;
    int height;
    int mines;
    int x;
    int y;
    int seed;
    scanf("%d%d%d%d%d%d", &width, &height, &mines, &x, &y, &seed);
    int **grid;
    grid = (int **)malloc(sizeof(int*) * height);
    for (int i = 0; i < height; i++) {
        grid[i] = (int *)malloc(sizeof(int) * width);
    }

    int n = 0;
    unsigned int newSeed = seed;
    while (n < mines)
    {
        newSeed = (214013 * newSeed + 2531011) / 65536;
        int mineX =  newSeed % width;
        newSeed = (214013 * newSeed + 2531011) / 65536;
        int mineY =  newSeed % height;
        int distX = x - mineX;
        int distY = y - mineY;
        if((distX * distX > 1 || distY * distY > 1) && grid[mineY][mineX] != 1)
        {
            grid[mineY][mineX] = 1;
            n++;
        }
    }

    for (int i = 0; i < height; i++) {
        for (int j = 0; j < width; j++) {
            if(grid[i][j] == 1)
            {
                printf("#");
            }
            else
            {
                int mines = calcMines(i , j, height, width, grid);
                if (mines == 0)
                {
                    printf(".");
                }
                else
                {
                    printf("%d", mines);
                }
            }
        }
        printf("\n");
    }

    return 0;
}