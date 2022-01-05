
/*
Bellow class gives count of color exist in the data.
class Color_Count:

Methods :
1.file_read_and_get_data : this fuction will read the file.
2.get_Count : This will actually give us count of each pixel.

*/

#define IMG_WIDTH 21
#define IMG_HEIGHT 42

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
    int Image_Buffer[IMG_HEIGHT][IMG_WIDTH];
    //int **Index_List;
    void release(void);
    bool file_read_and_get_data(FILE *);
    void bounding_box_Attrib(int x, int y, int width, int height);
};

