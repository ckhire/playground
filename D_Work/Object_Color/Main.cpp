#include<iostream>
#include<fstream>
#include"./stdc++.hpp"
#include"color_data.hpp"

using namespace std;

int main()
{
    FILE *file = NULL;
    Color_Count color;

    file = fopen("data.txt","r");
    if(file == NULL)
    {
        cout<<"file not opend...!\n";
        exit(0);
    }

    color.file_read_and_get_data(file);
    cout<<"--------------\n";
    cout<<"N  Color Count :"<<n<<endl;
    cout<<"R  Color Count :"<<r<<endl;
    
    return (0);
}

bool Color_Count::file_read_and_get_data(FILE *file)
{
    Color_Count C_obj;
    C_obj.Index_R = NULL;
    
    C_obj.Index_R = (char**)malloc(900 * sizeof(char*));

    while (fgets(C_obj.str_GC,sizeof(C_obj.str_GC),file) != NULL)
    {
        C_obj.get_Count(C_obj.str_GC);
    }
    
    C_obj.release();

    return true;
}

int Color_Count::get_Count(char *str)
{
    stringstream s(str);
    char sample_char[20] = {0};
    Color_Count C_obj;

    Index_R[dump] = (char*)malloc(20 * sizeof(char));
    memcpy(Index_R[dump]," ", 20 * sizeof(char));
    
    while(s >> sample_char)
    {
        if(strcmp(sample_char, "N") == 0)
        {        
            n++;
            memcpy(Index_R[dump], &str, 20 * sizeof(char));
        }
        else if(strcmp(sample_char, "R") == 0)
        {
            r++;
            memcpy(Index_R[dump], &str, 20 * sizeof(char));
        }
    }
    
    dump++;
    
    return(dump);
}

void Color_Count::release(void)
{
    int i = 0;
    
    while(Index_R[i] != NULL)
    {
        free(Index_R[i]);
        Index_R[i] = NULL;
        i++;
    }
    
}
