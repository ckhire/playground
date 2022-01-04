
/*
Bellow class gives count of color exist in the data.
class Color_Count:

Methods :
1.file_read_and_get_data : this fuction will read the file.
2.get_Count : This will actually give us count of each pixel.

*/

int r = 0;
int n = 0;

class Color_Count
{
    private:
    char str_GC[255];
    char **Index_R;

    int string_Seperator(char *);
    
    public:
    int dump;
    //int **Index_List;
    void release(void);
    bool file_read_and_get_data(FILE *);
};

