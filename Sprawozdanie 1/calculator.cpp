#include <iostream>
#include <limits>

float addition(float* begin, float* end)
{
    float result = 0;
    for (float* p = begin; p != end; p++)
    {
        result += *p;
    }
    return result;
}

float subtraction(float* begin, float* end)
{
    float result = 0;
    for (float* p = begin; p != end; p++)
    {
        result -= *p;
    }
    return result;
}

float multiplication(float* begin, float* end)
{
    float result = *begin;
    for (float* p = begin + 1; p != end; p++)
    {
        result *= *p;
    }
    return result;
}

float division(float* begin, float* end)
{
    float result = *begin;
    for (float* p = begin + 1; p != end; p++)
    {
        result /= *p;
    }
    return result;
}

void getNumbers(int n, float* begin, float* end)
{
    int lenn = end - begin; // how many numbers there are to calculate
    int i = 1;
    // Get the numbers
    for (float* p = begin; p != end; p++)
    {
        std::cout << "Put in the " << i << " number: ";
        std::cin >> *p;
        i++;
    }
    // Display the numbers
    std::cout << "\nYour numbers:\n";
    while (lenn > 0)
    {
        std::cout << *begin << ' ';
        ++begin;
        --lenn;
    }
    std::cout << "\n\n";
}

float menu(float* begin, float* end)
{
    std::cout << "List of functions:\n";
    std::string functions[] = { "Addition", "Subtraction", "Multiplication", "Division" };
    int lenf = *(&functions + 1) - functions;

    for (int i = 0; i <= (lenf - 1); i++)
    {
        std::cout << "[" << (i + 1) << "] " << functions[i] << "\n";
    }

    int ch;
    std::cout << "Choose a function: ";
    bool loop = false;
    do {
        loop = false;
        std::cin >> ch;
        std::cin.clear();
        std::cin.ignore(std::numeric_limits < std::streamsize >::max(), '\n');
        switch (ch)
        {
        case 1:
            return addition(begin, end);
            break;
        case 2:
            return subtraction(begin, end);
            break;
        case 3:
            return multiplication(begin, end);
            break;
        case 4:
            return division(begin, end);
            break;
        default:
            std::cout << "Wrong choice. Choose a function once again: ";
            loop = true;
            break;
        }
    } while (loop == true);
}


int main()
{
    int n;
    std::cout << "Calculator\nHow many number do you want to count: ";
    std::cin >> n;
    std::cin.clear();
    std::cin.ignore(std::numeric_limits < std::streamsize >::max(), '\n');

    float* numbers = new float[n];
    getNumbers(n, numbers, numbers + n);

    float result = menu(numbers, numbers + n);
    std::cout << "\nResult: " << result;

    delete[] numbers;

    std::string response;

    std::cout << "\n\nAre you satisfied with the program performance?\n";
    std::cin >> response;
    std::cout << "Thank you for your opinion\n";

    return 0;
}