# Facebook Light Clone

## Description

This clone app is a challenge that was proposed on GoStack 10.0 bootcamp about Node.js, ReactJS and React Native, offered by Rocketseat.

## Objectives

- Understand how to apply css styles to ReactJS components.
- Understand how flexbox layouts can be used to construct dynamic interfaces with ReactJS components.
- Practice css knowledges cloning a light layout that mimic the Facebook timeline.

## App Composition

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

## Screen Capture

**Header Component** (red)

**PostList Component** (blue)

**Post Component** (green)

**Comment Component** (black)

![Comment Component](https://github.com/ivanseibel/assets/blob/master/img/facebook-light-clone/screen-capture.png?raw=true)
