import numpy as np 
import cv2 as cv
from matplotlib import pyplot as plt 
import os.path

filePath = 'images/network_tower.png'
if os.path.exists(filePath):
    print("Path exists")
else: 
    print("Path DOES NOT exist")
    
img = cv.imread('images/network_tower.png', cv.IMREAD_GRAYSCALE)
assert img is not None, "file not found" 
edges = cv.Canny(img,100,200)
contours, _ = cv.findContours(edges, cv.RETR_TREE, cv.CHAIN_APPROX_SIMPLE)

# convert img to .svg
width, height = img.shape[1], img.shape[0]
f = open('images/output.svg', 'w+') 
f.write('<svg width="' + str(width) + '" height="' + str(height)+'" xmlns="http://www.w3.org/2000/svg">')

for poly in contours:
    new_str = '<polyline points="'
    for x, y in poly[:,0]:
        new_str = new_str + str(x)+ ',' + str(y) + ' '
    new_str = new_str + '" style="fill:none;stroke:black;strokeWidth:1" />'
    f.write(new_str)
    pass

f.write('</svg>')
f.close()

"""
plt.subplot(121),plt.imshow(img,cmap = 'gray')
plt.title('Original Image'), plt.xticks([]), plt.yticks([])
plt.subplot(122),plt.imshow(edges,cmap = 'gray')
plt.title('Edge Image'), plt.xticks([]), plt.yticks([])
 
plt.show()
"""