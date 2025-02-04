#include<iostream>
#include<opencv2/opencv.hpp>
#include <vector>
#include <cstdlib>
using namespace std;
using namespace cv;


int main(int argc, char** argv) {
    
    int t1,t2, counter = 0;
    int img_w = 0;
    int img_h = 0;
    int img_bb_w = 0;
    int img_bb_h = 0;
    float r_perc = 0;
    float na_perc = 0;
    Vec3b *pixel = NULL;
    vector<int> R_Index;
    vector<int> N_Index;
    
    int r_counter = 0;
    int n_counter = 0;
    
    if (argc < 3) {
        std::cerr << "Usage: " << argv[0] << " <input_image_path> <output_image_path>" << std::endl;
        return 1;
    }
    Mat img_src = imread(argv[1], IMREAD_COLOR);
        Mat img = img_src(Range(2, 19), Range(3, 17));
    } else {
        std::cerr << "Image dimensions are too small for the specified ranges." << std::endl;
        return -1;
    }
    if (img_src.empty()) {
        std::cerr << "Could not open or find the image" << std::endl;
        return 1;
    }
    img_w = img_src.size().width;
    img_h = img_src.size().height;

    Mat img = img_src(Range(2, 19), Range(3, 17));

    t1 = getTickCount();

    img_bb_w = img_src.size().width;
    img_bb_h = img_src.size().height;

    
    pixel = (Vec3b*)malloc(sizeof(Vec3b) * img.size().width * img.size().height);
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
        std::cout << "Pixels vec3b size is : " << (sizeof(Vec3b) * (img_bb_w * img_bb_h)) << endl;
    for (int y = 0; y < img.size().height; y++)
    {
        for (int x = 0; x < img.size().width; x++)
        {
            
            pixel[counter] = img.at<Vec3b>(y, x);

            if (img.at<Vec3b>(y, x)[2] >= 65)
            {
                R_Index.insert(R_Index.end(),counter); 
                r_counter++;
            }
            else if (img.at<Vec3b>(y, x)[2] <= 65)
            {
                N_Index.insert(N_Index.end(), counter); 
                n_counter++;
            }
            counter++;
        }
    }

    for (int i = 0; i < counter; i++)
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

    r_perc = ((float)r_counter / (float)counter) * 100.0;
    std::cout << "Red colour perentage : " <<r_perc<< endl;
    imwrite(argv[2], img);
    std::cout << "Not Applicable colour perentage : " <<na_perc<< endl;

    t2 = getTickCount();

    imwrite("D:/Local_Development/03.ColorDetection/src/Out_put.jpg", img);

if(pixel != NULL)
free(pixel);
    return 0;
}
