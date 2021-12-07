#include<iostream>
#include<opencv2/opencv.hpp>
#include <vector>

using namespace std;
using namespace cv;

int main() {
    
    int t1,t2, counter = 0;
    int img_w = 0;
    int img_h = 0;
    int img_bb_w = 0;
    int img_bb_h = 0;
    void get_Pixel_Index(Mat);
    Vec3b *pixel = NULL;
    vector<int> R_Index;
    vector<int> N_Index;

    int r_counter = 0;
    int n_counter = 0;

    Mat img_src = imread("D:/Local_Development/03.ColorDetection/src/red_1.jpg", IMREAD_COLOR);

    img_w = img_src.size().width;
    img_h = img_src.size().height;

    Mat img = img_src(Range(2, 19), Range(3, 17));

    t1 = getTickCount();

    img_bb_w = img_src.size().width;
    img_bb_h = img_src.size().height;

    
    std::cout << "Image Width : " << img_bb_w <<endl;
    std::cout << "Image Height : " << img_bb_h <<endl;
    std::cout << "Image channels : " << img.channels()<<endl;
    
    pixel = (Vec3b*)malloc(sizeof(Vec3b) * (img_bb_w * img_bb_h));
    if (pixel == NULL)
    {
        img.release();
        return(0);
    }
    else
        std::cout << "Pixels vec3b size is : " << sizeof(pixel)<<endl;

    for (int x = 0; x < img.size().width; x++)
    {
        for (int y = 0; y < img.size().height; y++)
        {
            
            pixel[counter] = img.at<Vec3b>(x, y);

            if (img.at<Vec3b>(x, y)[2] >= 65)
            {
                R_Index.insert(R_Index.end(),counter); 
                r_counter++;
            }
            else if (img.at<Vec3b>(x, y)[2] <= 65)
            {
                N_Index.insert(N_Index.end(), counter); 
                n_counter++;
            }
            counter++;
        }
    }

    for (int i = 1; i <= counter; i++)
    {
        std::cout << "pixel[" << i << "] BGR values are : " << pixel[i]<<endl;
    }

    std::cout << "Red colour index : " << endl;
    for (auto x : R_Index)
    {
        std::cout << x << endl;
    }

    std::cout << "Not Applicable colour index : " << endl;

    for (auto y : N_Index)
    {
        std::cout << y << endl;
    }
    
    std::cout << "pixels count : " << counter << endl;
    std::cout << "Red colour count : " <<r_counter<< endl;
    std::cout << "Not Applicable colour count : " <<n_counter<< endl;

    t2 = getTickCount();

    imwrite("D:/Local_Development/03.ColorDetection/src/Out_put.jpg", img);

    if(pixel != NULL)
        free(pixel);

  
    img.release();
    img_src.release();

    return 0;
}
