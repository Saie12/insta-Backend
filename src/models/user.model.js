import mongoose, { Schema } from "mongoose";
import plm from "passport-local-mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        avatar: {
            type: String,  // Cloudinary url
            required: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        bio: {
            type: String,
        },
        contact: {
            type: String,
        },
        stories: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "story",
            }
        ],
        saved: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "post",
            }
        ],
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "post",
            }
        ],
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
            }
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
            }
        ]
    },
    {
        timestamps: true,
    }
)

userSchema.plugin(plm);

export const User = mongoose.model("User", userSchema);
