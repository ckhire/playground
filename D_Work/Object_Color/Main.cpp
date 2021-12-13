#include<iostream>
#include<fstream>
#include"./stdc++.hpp"
#include"color_data.hpp"
#include<list>
#include<iterator>

using namespace std;

char **Index_N;
char **Index_r_sample;
char **temp_str;

int i = 0;

int increment_List = 0;
map<char*,char*> color_counter;
map<char*, char*>::iterator itr;

int temp_counter = 0;

int incremental_n = 0;
int incremental_r = 0;

float r_perc = 0;
float na_perc = 0;

int total_Pixels = 0;

void Allocate_Memory(char *);

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


    cout <<endl<< "-----Color with the Index---- "<<endl;
    
    itr = color_counter.begin();
    
    while(itr!= color_counter.end())
    {
        cout<<itr->first<<" "<<itr->second<<endl;
        ++itr;
    }

    cout<<"--------------\n";
    cout<<"Total Pixel Count :"<<total_Pixels<<endl;
    cout<<"N  Color Count :"<<n<<endl;
    cout<<"R  Color Count :"<<r<<endl;

    r_perc = ((float)r / (float)total_Pixels) * 100.0;
    cout << "Red colour perentage : " <<r_perc<< endl;
    na_perc = ((float)n / (float)total_Pixels) * 100.0;
    cout << "Not Applicable colour perentage : " <<na_perc<< endl;
    

    color.release();
    return (0);

}

bool Color_Count::file_read_and_get_data(FILE *file)
{
    Color_Count C_obj;
   
    Index_N = (char**)malloc(900 * sizeof(char*));
    
    Index_r_sample = (char**)malloc(900 * sizeof(char*));
    
    temp_str = (char**)malloc(sizeof(char*) * 900);
  
    while (fgets(C_obj.str_GC,sizeof(C_obj.str_GC),file) != NULL)
    {
        C_obj.string_Seperator(C_obj.str_GC);

    }

    return true;
}

int Color_Count::string_Seperator(char *str)
{
    stringstream s(str);
    char sample_char[10] = {0};
    Color_Count C_obj;

    //allocate buffers
    Allocate_Memory(str);

    //get the string from source 
    while(s >> sample_char)
    {
        
        temp_str[temp_counter] = (char*)calloc(strlen(sample_char), sizeof(char));
        memcpy(temp_str[temp_counter]," ", sizeof(char) * strlen(sample_char));

        memcpy(temp_str[temp_counter], sample_char, strlen(sample_char));
        
        if(strcmp(sample_char, "N") == 0)
        {        
            n++;
            memcpy(Index_N[incremental_n], str, strlen(str));
            incremental_n++;
            total_Pixels++;

        }
        else if(strcmp(sample_char, "R") == 0)
        {
            r++; 
            memcpy(Index_r_sample[incremental_r], str, strlen(str));
            incremental_r++;
            total_Pixels++;
        }
        

        
        temp_counter++;
    }
    
    color_counter.insert(pair<char*,char*>(temp_str[1],temp_str[7]));

    temp_counter = 0;

    dump++;
    
    return(dump);
}

void Allocate_Memory(char *str)
{
    /* 
        this fuction will allocate the memory to buffers.
    */

    Index_r_sample[incremental_r] = (char*)malloc(sizeof(char) * strlen(str));
    memcpy(Index_r_sample[incremental_r]," ", sizeof(char) * strlen(str));
    
    Index_N[incremental_n] = (char*)malloc(sizeof(char) * strlen(str));
    memcpy(Index_N[incremental_n]," ", sizeof(char) * strlen(str));
    
    
} 

void Color_Count::release(void)
{
    int i = 0;

    if(!color_counter.empty())
    {
        color_counter.clear();
    }

    while(Index_N[i] != NULL)
    {
        free(Index_N[i]);
        Index_N[i] = NULL;
        i++;
    }

    while(Index_r_sample[i] != NULL)
    {
        free(Index_r_sample[i]);
        Index_r_sample[i] = NULL;
        i++;
    }
    
}
