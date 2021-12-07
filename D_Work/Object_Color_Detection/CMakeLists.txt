cmake_minimum_required(VERSION 3.10)

if(${CMAKE_SOURCE_DIR} STREQUAL ${CMAKE_BINARY_DIR})
    message( FATAL_ERROR "Build dir is same as src please chage the dir...!!!\n" )
endif()


set(PROJECT OpenCV_Sample_1)


project(${PROJECT})

add_executable(${PROJECT} source.cpp)



set(OPENCV_INCLUDE_DIR "C:/OpenCV_Build/include")
set(OPENCV_LIB_DIR "C:/OpenCV_Build/x64/vc16/lib")

message(STATUS "OpenCV Lib path:${OPENCV_LIB_DIR}")

target_include_directories(${PROJECT} PUBLIC "${OPENCV_INCLUDE_DIR}")
target_link_directories(${PROJECT} PUBLIC "${OPENCV_LIB_DIR}")

target_link_libraries(${PROJECT} opencv_core440.lib  opencv_imgcodecs440.lib opencv_imgproc440.lib)

