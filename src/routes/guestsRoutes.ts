/**
 * @swagger
 * tags:
 *   - name: Guests
 *     description: Operations related to open Api's
 */

/**
 * @swagger
 * /api/blogs:
 *   get:
 *    summary: Getting All blogs
 *    description: Fetching all Blogs from the Backend API
 *    tags:
 *      - Guests
 *    responses:
 *      200:
 *        description: You will get All Blogs
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                    description: The unique identifier of the blog.
 *                  title:
 *                   type: string
 *                   description: The Title of the blog.
 *                  subtitle:
 *                    type: string
 *                    description: The Subtitle of the blog.
 *                  body:
 *                    type: string
 *                    description: The Body of the blog.
 *                  img1:
 *                    type: string
 *                    description: The Image 1 url
 *                  img2:
 *                    type: string
 *                    description: The Image 2 url
 *                  likes:
 *                    type: number
 *                    description: The Total Count of Likes on The blog.
 *                  comments:
 *                    type: array
 *                    description: The Array of All comments Object
 *                    items:
 *                      type: object
 *                      properties:
 *                        name:
 *                          type: string
 *                        email:
 *                          type: string
 *                        comment:
 *                          type: string
 *                  createdAt:
 *                     type: string
 *                     description: The Time it was Created
 *                     format: date-time
 *                     example: "2024-04-10T19:47:02.582+00:00"
 *                  __v:
 *                    type: number
 *                    description: Generated By Mongo DB
 */

/**
 * @swagger
 * /api/blog/{blogId}:
 *   get:
 *     summary: Getting A single blog
 *     description: This End Point is for getting Single Blog using it's Id
 *     tags:
 *      - Guests
 *     parameters:
 *       - name: blogId
 *         in: path
 *         description: The ID of the blog you get.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: You will get One Blog Data
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:
 *                likes:
 *                  type: number
 *                  example: 200
 *                _id:
 *                  type: string
 *                  example: 661951b602590fb778eb45f5
 *                title:
 *                  type: string
 *                subtitle:
 *                  type: string
 *                img1:
 *                  type: string
 *                img2:
 *                  type: string
 *                body:
 *                  type: string
 *                __v:
 *                  type: number
 *                  description: Automatically Generated By Mongo DB
 *                comments:
 *                  type: array
 *                  description: The Array of All comments Object
 *                  items:
 *                    type: object
 *                    properties:
 *                      name:
 *                        type: string
 *                      email:
 *                        type: string
 *                      comment:
 *                        type: string
 *                createdAt:
 *                  type: string
 *                  description: The Time it was Created
 *                  format: date-time
 *                  example: "2024-04-10T19:47:02.582+00:00"
 */

/**
 * @swagger
 * /api/message/new:
 *   post:
 *     summary: Posting New Message
 *     description: This Api end point for sending message from guest User
 *     tags:
 *      - Guests
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               guest:
 *                 type: string
 *               guestemail:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: You Will get The Object of Your comment
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  guest:
 *                    type: string
 *                  guestemail:
 *                    type: string
 *                  message:
 *                    type: string
 *                  date:
 *                    type: string
 *                    format: date-time
 *                    example: "2024-04-14T20:25:55.811Z"
 *                  _id:
 *                    type: string
 *                  __v:
 *                    type: number
 */

/**
 * @swagger
 * /api/like/new/{blogId}:
 *   post:
 *     summary: Storing Likes to Database
 *     description: This End Point is for saving like of a blog to database
 *     tags:
 *      - Guests
 *     parameters:
 *       - name: blogId
 *         in: path
 *         description: The ID of the blog to add likes.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                likes:
 *                  type: number
 *                  example: 200
 *     responses:
 *       200:
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                   type: string
 *                   example: Liked
 */

/**
 * @swagger
 * /api/comment/new/{blogId}:
 *   post:
 *     summary: Storing Comment to Database
 *     description: This End Point is for saving Comment of a blog to database
 *     tags:
 *      - Guests
 *     parameters:
 *       - name: blogId
 *         in: path
 *         description: The ID of the blog to add Comment.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  types: string
 *                  format: email
 *                comment:
 *                  type: string
 *     responses:
 *       200:
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                   type: string
 *                   example: Succesfully Added Comment
 */

/**
 * @swagger
 * /api/sub/new:
 *   post:
 *     summary: Storing new Sub to Database
 *     description: This end Point is for saving new sub to database and get verfication email
 *     tags:
 *      - Guests
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                subscriber:
 *                  type: string
 *                  format: email
 *     responses:
 *       200:
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                    example: 660eff7e8d87f1a0fa79f4fc
 *                  subscriber:
 *                    type: string
 *                    format: email
 *                  date:
 *                    type: string
 *                    format: date-time
 *                    example: "2024-04-10T19:47:02.582+00:00"
 *                  __v:
 *                    type: number
 *
 */

/**
 * @swagger
 * /api/user/new:
 *   post:
 *     summary: Storing new user credentials
 *     description: This end Point is for saving new User to database with Hashed Password as well
 *     tags:
 *      - Guests
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  format: email
 *                username:
 *                  type: string
 *                password:
 *                  type: string
 *     responses:
 *       201:
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: User Created Successfully
 *                  open:
 *                    type: string
 *                    example: login.html
 *       409:
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: User already in Use Provide a unique Username and Email
 *       500:
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Internal Server Error
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Verify User credentials
 *     description: This end Point is for User Trying To loging the Admin panel
 *     tags:
 *      - Guests
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                password:
 *                  type: string
 *     responses:
 *       201:
 *         headers:
 *           Set-Cookie:
 *             description: for Authentication
 *             schema:
 *               type: string
 *               example: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjFhYjIxYTZlZDFm
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Successfully Login
 *                  open:
 *                    type: string
 *                    example: dashboard.html
 *                  token:
 *                    type: string
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjFhYjIxYTZlZDFmNGY5NzUyZmM4NDYiLCJpYXQiOjE3MTMwMzcwNzcsImV4cCI6MTcxMzEyMzQ3N30.JrqoZWMSrVclMqMH8FyJozyK5pSkONHRi-Nr0Wqwh_E
 *       401:
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: Invalid Credentials
 */

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Sending Email from Contact Form
 *     tags:
 *      - Guests
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                  format: email
 *                message:
 *                  type: string
 *     responses:
 *       200:
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties: 
 *                  data:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                 error:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 */


require("dotenv").config();
import express, { Express, Router } from "express";
import {
 get_blogs,
 get_single_blog,
 post_newComment,
 post_newLike,
 post_newMessage,
 post_newSub,
 post_newUser,
 post_Login,
 contact_email,
} from "../Controllers/guestsContoller";

const app: Express = express();
const router: Router = express.Router();

////// Get requests

router.get("/blogs", get_blogs);
router.get("/blog/:id", get_single_blog);

//// Post requests
router.post("/comment/new/:id", post_newComment);
router.post("/like/new/:id", post_newLike);
router.post("/message/new", post_newMessage);
router.post("/sub/new", post_newSub);
router.post("/user/new", post_newUser);
router.post("/user/login", post_Login);
router.post("/contact", contact_email);
export default router;
