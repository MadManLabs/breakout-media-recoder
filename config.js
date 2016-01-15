var decoders = require('./decoders');

var config = {
    types: [
        {
            type: "image",
            decoder: decoders.imageDecode,
            sizes: [
                {name: "thumbnail", side: 80, quality: 0.8},
                {name: "small", side: 200, quality: 0.65},
                {name: "medium", side: 600, quality: 0.8},
                {name: "large", side: 1200, quality: 0.8}
            ]
        },
        {
            type: "video",
            decoder: decoders.videoDecode,
            sizes: [
                {name: "low", side: 480, videobitrate: 1200, audiobitrate: 92},
                {name: "medium", side: 720, videobitrate: 2200, audiobitrate: 128},
                {name: "hd", side: 1280, videobitrate: 4200, audiobitrate: 192},
                {name: "fullhd", side: 1920, videobitrate: 6200, audiobitrate: 192}
            ]
        },
        {
            type: "audio",
            decoder: decoders.audioDecode,
            sizes: [
                {name: "low", bitrate: 48},
                {name: "medium", bitrate: 92},
                {name: "high", bitrate: 192}
            ]
        }
    ]
};

module.exports = config;