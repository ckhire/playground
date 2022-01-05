#include<iostream>
#include<fstream>
#include"./stdc++.hpp"
#include"color_data.hpp"
#include<list>
#include<iterator>

#define MAX_LENTH 900
#define IMG_WIDTH 21
#define IMG_HEIGHT 42


using namespace std;

char** Index_N;
char** Index_r_sample;
char** temp_str;

int color_buffer[MAX_LENTH][2];
int color_buffer_itr = 0;

int Image_Buffer[IMG_HEIGHT][IMG_WIDTH];
int x = 0, y = 0;
int i = 0;

int increment_List = 0;
map<char*, char*> color_counter;


int temp_counter = 0;

int incremental_n = 0;
int incremental_r = 0;

float r_perc = 0;
float na_perc = 0;


int total_Pixels = 0;

FILE* output = NULL;
FILE* file = NULL;

//Bounding box Attributes
int N_Count = 0 , R_Count = 0 ;
int Pixel_Count = 0;

void Allocate_Memory(char*);

void bounding_Box_Attrib(int x, int y, int w, int h);

int main()
{
    Color_Count color;

    file = fopen("data.txt", "r");
    output = fopen("output.txt", "w");
    if (file == NULL)
    {
        cout << "file not opend...!\n";
        exit(0);
    }

    color.file_read_and_get_data(file);

    cout << endl << "-----Color with the Index---- " << endl;

    color_buffer_itr = 0;

    for (int i = 0; i < IMG_HEIGHT; i++)
    {
        for (int j = 0; j < IMG_WIDTH; j++)
        {
            Image_Buffer[i][j] = color_buffer[color_buffer_itr][1];
            cout << Image_Buffer[i][j] << " ";
            color_buffer_itr++;
        }
        cout << endl;
    }
    
    cout << "--------------\n";
    cout << "Total Pixel Count :" << total_Pixels << endl;
    cout << "N  Color Count :" << n << endl;
    cout << "R  Color Count :" << r << endl;

    r_perc = ((float)r / (float)total_Pixels) * 100.0;
    cout << "Red colour perentage : " << r_perc << endl;
    na_perc = ((float)n / (float)total_Pixels) * 100.0;
    cout << "Not Applicable colour perentage : " << na_perc << endl<<endl;

    /*start working on bounding box */

    cout<<"Bounding Box Pixel Data : "<<endl<<endl;

    bounding_Box_Attrib(5,5,10,10);

    cout<<endl<<"Pixel Count : "<<Pixel_Count<<endl;
    cout<<"Not Applicable Count : "<<N_Count<<endl;
    cout<<"Red Color Count : "<<R_Count<<endl;
    
    r_perc = ((float)R_Count / (float)Pixel_Count) * 100.0;
    cout << "Red colour perentage : " << r_perc << endl;
    na_perc = ((float)N_Count / (float)Pixel_Count) * 100.0;
    cout << "Not Applicable colour perentage : " << na_perc << endl;

    color.release();

    return (0);

}

void bounding_Box_Attrib(int x, int y, int w, int h)
{
    int temp[w-x][h-y];

    for (int i = y; i < h; i++)
    {
        for (int j = x; j < w; j++)
        {
            temp[i][j] = Image_Buffer[i][j];
            cout << temp[i][j] << " ";
            
            if(Image_Buffer[i][j] == 78)
            {
                N_Count++;
            }

            if( Image_Buffer[i][j] == 82)
            {
                R_Count++;
            } 
            Pixel_Count++;
        }
        cout << endl;
    }

}

bool Color_Count::file_read_and_get_data(FILE* file)
{
    Color_Count C_obj;

    Index_N = (char**)malloc(MAX_LENTH * sizeof(char*));

    Index_r_sample = (char**)malloc(MAX_LENTH * sizeof(char*));

    temp_str = (char**)malloc(sizeof(char*) * MAX_LENTH);

    while (fgets(C_obj.str_GC, sizeof(C_obj.str_GC), file) != NULL)
    {
        C_obj.string_Seperator(C_obj.str_GC);

    }

    return true;
}

int Color_Count::string_Seperator(char* str)
{
    stringstream s(str);
    char sample_char[10] = { 0 };
    int string_size = 0;
    
    //allocate buffers
    Allocate_Memory(str);

    //get the string from source 
    while (s >> sample_char)
    {
        string_size = strlen(sample_char);
        temp_str[temp_counter] = (char*)malloc(string_size);
        ////memcpy(temp_str[temp_counter], " ", strlen(sample_char));
        
        memcpy(temp_str[temp_counter], sample_char, strlen(sample_char));

        if (strcmp(sample_char, "N") == 0)
        {
            n++;
            memcpy(Index_N[incremental_n], str, strlen(str));
            incremental_n++;
            total_Pixels++;
        }
        else if (strcmp(sample_char, "R") == 0)
        {
            r++;
            memcpy(Index_r_sample[incremental_r], str, strlen(str));
            incremental_r++;
            total_Pixels++;
        }
        temp_counter++;
    }
    
    color_buffer[color_buffer_itr][0] = atoi(temp_str[1]);
    color_buffer[color_buffer_itr][1] = *(int*)(temp_str[7]);

    temp_counter = 0;

    color_buffer_itr++;


    dump++;

    return(dump);
}

void Allocate_Memory(char* str)
{

    Index_r_sample[incremental_r] = (char*)malloc(sizeof(char) * strlen(str));
    memcpy(Index_r_sample[incremental_r], " ", sizeof(char) * strlen(str));

    Index_N[incremental_n] = (char*)malloc(sizeof(char) * strlen(str));
    memcpy(Index_N[incremental_n], " ", sizeof(char) * strlen(str));

}

void Color_Count::release(void)
{

    int i = 0;
    fclose(output);
    fclose(file);

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
