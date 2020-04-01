# Facebook Light Clone

## Objectives

- Understand how to apply css styles to ReactJS components.
- Understand how flexbox layouts can be used to construct dynamic interfaces with ReactJS components.
- Practice css knowledges cloning a light layout that mimic the Facebook timeline.

## Description

This application is composed by 4 components: Header, PostList, Post and Comment.

### Header

Static component responsible for show the logo and login info.

### PostList

PostList is basically a structure with a list of posts. The list is supplied from a json object that is imported from posts.json file. This json file contains some posts with adictional informations and related comments to simulate a real timeline.

In each list iteration, the post data is transmitted to the Post component.

### Post

This component implements a kind of card that group all the post informations.

First are rendered the post data, like author avatar, author name, post date and the post message.

In the bottom of the card there is a list of comments, where the data of each comment is transmitted to the Comment component.

## Tools and Extensions used in this project

- Webpack
- Babel
- Webpack Dev Server
- ReactJS
- JSON Loader

## Facebook Light Page Model

The cloned model can be accessed [in this GitHub repository](https://github.com/Rocketseat/bootcamp-gostack-desafio-04).

## Some Screen Captures

**Header**

![Header Component](https://github.com/ivanseibel/assets/blob/master/img/facebook-light-clone/header.png?raw=true)

**PostList**

![PostList Component](https://github.com/ivanseibel/assets/blob/master/img/facebook-light-clone/postlist.png?raw=true)

**Post**

![Post Component](https://github.com/ivanseibel/assets/blob/master/img/facebook-light-clone/post.png?raw=true)

**Comment**

![Comment Component](https://github.com/ivanseibel/assets/blob/master/img/facebook-light-clone/comment.png?raw=true)
