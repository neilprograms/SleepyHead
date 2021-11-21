
# import libraries
import pandas as pd
import numpy as np
from PIL import Image
from keras.preprocessing.image import load_img
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import glob
from sklearn.model_selection import train_test_split
import tensorflow as tf
from tensorflow.keras import layers, models
import matplotlib.pyplot as plt
import cv2

# example image file name: /Users/neil/Documents/GitHub/SleepyHead/mrlEyes_2018_01/s0001/s0001_00001_0_0_0_0_0_01.png
imageFolderPath = "/Users/neil/Documents/GitHub/SleepyHead/mrlEyes_2018_01"


def convertToRGB(image):
    new_img = np.zeros((image.shape[0],image.shape[1],3))
    for color in range(3):
        for row in range(image.shape[0]):
            for col in range(image.shape[1]):
                new_img[row,col,color] = image[row,col]
    return new_img

IMAGES = []
LABELS = []

eyeState = -1
for folder in glob.iglob(f"{imageFolderPath}/*"):
    #print(folder)
    for imageFileName in glob.iglob(f"{folder}/*"):
        print(imageFileName)
        if ".jpg" in imageFileName or ".png" in imageFileName:
            # reads the image and resizes them to all 100 by 100
            image = cv2.imread(imageFileName)
            image = cv2.resize(image, (100, 100))
            # identifies if eyes are closed or open in the tite of the image
            if "closed" in folder:
                eyeState = 0
            elif "open" in folder:
                eyeState = 1
            else:
                underScoreCounter = 0
                for index in range(len(imageFileName), 0, -1):
                    if imageFileName[index - 1] == '_':
                        underScoreCounter += 1
                    if underScoreCounter == 3:
                        eyeState = imageFileName[index - 1]
            IMAGES.append(image)
            LABELS.append(eyeState)

X = np.asarray(IMAGES)
Y = np.asarray(LABELS).astype(np.float32)
print("Training and Testing data shape:", X.shape, Y.shape)

'''
# shows first 5 rows of dataframe
for i in range(5):
    print("Eye State:", df.iloc[i,1])
    imgplot = plt.imshow(df.iloc[i,0])
    plt.show()
'''

# training and testing data
X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.2, random_state=101)
print("Shape of single image:", X_train[0].shape)
print("Training data shape:", X_train.shape, y_train.shape)
print("Testing data shape:", X_test.shape, y_test.shape)

# create, train, and test model
model = models.Sequential()
model.add(layers.Conv2D(100, (3, 3), activation='relu', input_shape=(100, 100, 3)))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(200, (3, 3), activation='relu'))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(200, (3, 3), activation='relu'))
model.add(layers.Flatten())
model.add(layers.Dense(200, activation='relu'))
model.add(layers.Dense(2))
print(model.summary())

model.compile(optimizer='adam',
              loss=tf.keras.losses.BinaryCrossentropy(),
              metrics=['accuracy'])

history = model.fit(X_train, y_train, epochs=10, 
                    validation_data=(X_test, y_test))

plt.plot(history.history['accuracy'], label='accuracy')
plt.plot(history.history['val_accuracy'], label = 'val_accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.ylim([0.5, 1])
plt.legend(loc='lower right')

test_loss, test_acc = model.evaluate(X_train,  y_train, verbose=2)
print(test_acc)
