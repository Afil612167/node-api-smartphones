const app = require('express')();
const port = 801;

app.listen(port, () => console.log('server running on ${port}'));
const smartphones = {
    product: [
        {
            name: "APPLE iPhone 11 (White, 128 GB)",
            thumbnail: "https://rukminim1.flixcart.com/image/128/128/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70",
            images: ["https://rukminim1.flixcart.com/image/128/128/kgiaykw0/mobile/d/d/s/apple-iphone-11-mhdj3hn-a-original-imafwqepmfedbhb2.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/kgiaykw0/mobile/d/d/s/apple-iphone-11-mhdj3hn-a-original-imafwqepwwgffuzj.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/k2jbyq80pkrrdj/mobile-refurbished/h/9/p/iphone-11-128-a-mwm22hn-a-apple-0-original-imafkg252zr5egdk.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/k2jbyq80pkrrdj/mobile-refurbished/q/z/v/iphone-11-128-u-mwm22hn-a-apple-0-original-imafkg25e5sew3kj.jpeg?q=70"
            ],
            description: "The iPhone 11 boasts a gorgeous all-screen Liquid Retina LCD that is water resistant up to 2 metres for up to 30 minutes. Moreover, the ultra-wide 13 mm lens has a 120-degree field of view for four times more scenes, and the 26 mm wide lens provides up to 100% Autofocus in low light.",
        },
        {
            name: "APPLE iPhone 13 (Starlight, 128 GB)",
            thumbnail: "https://rukminim1.flixcart.com/image/128/128/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
            images: ["https://rukminim1.flixcart.com/image/128/128/ktketu80/mobile/a/z/g/iphone-13-mlpg3hn-a-apple-original-imag6vpyxhzdccrc.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/ktketu80/mobile/y/g/j/iphone-13-mlpg3hn-a-apple-original-imag6vpyfftrfbzu.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/ktketu80/mobile/8/t/p/iphone-13-mlpg3hn-a-apple-original-imag6vpyhcmvgytj.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/t/r/6/iphone-13-mlpf3hn-a-apple-original-imag6vzz4ekzra9f.jpeg?q=70"
            ],
            description: "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.",
        },
        {
            name: "APPLE iPhone 13 Pro Max (Silver, 128 GB)",
            thumbnail: "https://rukminim1.flixcart.com/image/128/128/ktketu80/mobile/c/g/4/iphone-13-pro-max-mlll3hn-a-apple-original-imag6vpg3r7dyvhm.jpeg?q=70",
            images: ["https://rukminim1.flixcart.com/image/128/128/ktketu80/mobile/o/c/n/iphone-13-pro-mlvw3hn-a-apple-original-imag6vpcvzrq74zj.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/u/h/b/iphone-13-pro-mlvw3hn-a-apple-original-imag6vpcvzzdhds9.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/n/r/o/iphone-13-pro-mlvw3hn-a-apple-original-imag6vpczgekmhhf.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/e/0/v/-original-imagh7g8urcwshmn.jpeg?q=70"
            ],
            description: "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.",
        },
        {
            name: "APPLE iPhone 14 Pro Max (Gold, 128 GB)",
            thumbnail: "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/k/u/6/-original-imaghxen343tbjgj.jpeg?q=70",
            images: ["https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/a/l/m/-original-imaghxenrabesxpv.jpeg?q=70", "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/l/z/t/-original-imaghxempyrdczrw.jpeg?q=70", "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/f/w/f/-original-imaghxemrgmbnrzq.jpeg?q=70", "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/g/l/o/-original-imagh2gwesthjarp.jpeg?q=70"],
            description: "Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously, Rated IP68 (Maximum Depth of 6 Metres Upto 30 Minutes) Under IEC Standard 60529, Enabled by TrueDepth Camera for Facial Recognition, Emergency SOS, Crash Detection, Digital Compass, Cellular, iBeacon Micro Location, FaceTime Video Calling Over Cellular or Wi-Fi, FaceTime HD (1080p) Video Calling Over 5G or Wi?Fi, Share Experiences like Movies, TV, Music and Other Apps in a FaceTime Call with SharePlay, Screen Sharing, Portrait Mode in FaceTime Video, Spatial Audio, Voice Isolation and Wide Spectrum Microphone Modes, Optical Zoom with Rear-Facing Camera, FaceTime Audio, Voice over LTE (VoLTE), Wi-Fi Calling, Screen Sharing, Spatial Audio, Voice Isolation and Wide Spectrum Microphone Modes, Spatial Audio Playback, User Configurable Maximum Volume Limit, HDR with Dolby Vision, HDR10 and HLG, Upto 4K HDR AirPlay for Mirroring, Photos and Video Out to Apple TV (2nd Generation or Later) or AirPlay 2 Enabled Smart TV, Video Mirroring and Video Out Support: Upto 1080p Through Lightning Digital AV Adapter and Lightning to VGA Adapter (Adapters Sold Separately), Siri: Use Your Voice to Send Messages, Set Reminders and More, Activate Hands Free with Only Your Voice Using Hey Siri, Use Your Voice to Run Shortcuts from Your Favourite Apps, MagSafe Wireless Charging Upto 15 W, Qi Wireless Charging Upto 7.5 W, Charging via USB to Computer System or Power Adapter, Magnet Array, Alignment Magnet, Accessory Identification NFC, Magnetometer, Rating for Hearing Aids: M3, T4, System Requirements: Apple ID (Required for Some Features), Internet Access, Syncing to a Mac or PC requires: macOS Catalina 10.15 or Later Using the Finder, macOS El Capitan 10.11.6 Through macOS Mojave 10.14.6 Using iTunes 12.8 or Later, Windows 7 or Later Using iTunes 12.10.10 or Later (Free Download from apple.com/in/itunes/download)",
        },
        {
            name: "POCO X5 Pro 5G (Astral Black, 256 GB)  (8 GB RAM)",
            thumbnail: "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/a/x/j/-original-imagmkjfhzjhfhhe.jpeg?q=70",
            images: [
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/l/i/t/-original-imagmkjfhehvftse.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/j/x/c/-original-imagmkjfvt4ectkn.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/9/d/7/-original-imagmkjfcgr73wzg.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/v/2/5/-original-imagmkjf7gzzqtde.jpeg?q=70"
            ],
            description: "With the POCO X5 Pro 5G's abundance of exceptional features, enjoy smooth operations and great efficiency. The Snapdragon 778G processor in this smartphone is exceptionally fast and well-optimised. Additionally, it gives you dependable functionality whenever you need it thanks to its astounding 545K AnTuTu score. For an immersive experience, this phone also has a premium-grade AMOLED display and an exceptionally slim bezel. Moreover, this phone's fantastic 108 MP main camera allows you to take stunning photos and enjoy wonderful image processing. This phone's camera also supports 4K video recording at 30 frames per second.",
        },
        {
            name: "POCO X4 Pro 5G (Laser Black, 128 GB)  (6 GB RAM)",
            thumbnail: "https://rukminim1.flixcart.com/image/128/128/l19m93k0/mobile/q/f/w/-original-imagcv2dgezfbfet.jpeg?q=70",
            images: [
                "https://rukminim1.flixcart.com/image/128/128/l19m93k0/mobile/t/s/s/-original-imagcv2dmtzmcqsz.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/l19m93k0/mobile/9/h/z/-original-imagcv2dkqcw26zc.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/l19m93k0/mobile/1/1/0/-original-imagcv2dhnzeps4k.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/d/y/d/-original-imagmkjfstk8p6f6.jpeg?q=70"
            ],
            description:"With the POCO X5 Pro 5G's abundance of exceptional features, enjoy smooth operations and great efficiency. The Snapdragon 778G processor in this smartphone is exceptionally fast and well-optimised. Additionally, it gives you dependable functionality whenever you need it thanks to its astounding 545K AnTuTu score. For an immersive experience, this phone also has a premium-grade AMOLED display and an exceptionally slim bezel. Moreover, this phone's fantastic 108 MP main camera allows you to take stunning photos and enjoy wonderful image processing. This phone's camera also supports 4K video recording at 30 frames per second.",
        },
        {
            name:"POCO M4 Pro 5G (Power Black, 128 GB)  (8 GB RAM)",
            thumbnail:"https://rukminim1.flixcart.com/image/128/128/l0igvww0/mobile/6/8/o/-original-imagcafj5zcxz9wg.jpeg?q=70",
            images: [
                "https://rukminim1.flixcart.com/image/128/128/kzogn0w0/mobile/d/s/g/-original-imagbnymy5bgwyqn.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/kzn17680/mobile/b/k/l/-original-imagbhdraqz5ev3g.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/kzn17680/mobile/d/a/q/-original-imagbhdrygb6kfpz.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/kzn17680/mobile/4/d/x/-original-imagbhdrtgt4um3t.jpeg?q=70"
            ],
            description:"The POCO M4 Pro 5G, with 8 GB of RAM, a 6 nm Mediatek Dimensity 810 processor, and a Turbo RAM feature that can provide an additional 3 GB of RAM, is an intuitively designed phone for all your multitasking needs. Its attractive design ensures that this phone steals the spotlight wherever you take it. With a 16.76 cm (6.6) Smart display, a refreshing rate of 90 Hz, and a touch sampling rate of 240 Hz, this phone creates an engaging visual experience. This phone boasts a 5000 mAh battery that lasts for a substantial amount of time. Additionally, it comes with a 33 W rapid charging interface that charges your phone completely in around 60 minutes. This phone sports a 50 MP rear camera powered by AI and an 8 MP Ultrawide sensor that helps capture quality photographs.",
        },
        {
            name:"POCO M5 (Power Black, 128 GB)  (6 GB RAM)",
            thumbnail:"https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/z/8/p/-original-imaghsptt8g6rjz9.jpeg?q=70",
            images: [
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/z/w/s/-original-imagg6ghhgffgfjw.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/j/v/y/-original-imaghspthxwf42x2.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/s/m/x/-original-imaghsptgvgjcjaf.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/l/z/4/-original-imaghsptbhsgcjv8.jpeg?q=70"
            ],
            description:"Display that Outperforms :\nThe POCO M5 has a 16.71 cm (6.58) FHD+ Smart Display that is coupled with a 90Hz refresh rate that makes any user activity be it scrolling through feeds, content streaming, or gaming seamless and optimized. Equipped with a Corning Gorilla Glass 3 to and a Widevine L1 certification this phone doesn't compromise on the safety front.",
        },
        {
            name:"OnePlus 10 Pro 5G (Emerald Forest, 256 GB)  (12 GB RAM)",
            thumbnail:"https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/y/n/h/-original-imagdhvtjkha293f.jpeg?q=70",
            images: [
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/y/n/h/-original-imagdhvtjkha293f.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/e/p/r/-original-imagdhvtghcpqb6g.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/t/0/y/-original-imagdhvtazmamrhm.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/m/6/b/-original-imagdhvtgagx4mgj.jpeg?q=70"
            ],
            description:"In The Box \nHandset, 80W SUPERVOOC Power Adapter, Type-C Cable, Quick Start Guide, Welcome Letter, Safety Information and Warranty Card, Screen Protector (pre-applied), Protective Case, SIM Tray Ejector",
        },
        {
            name:"OnePlus 9 Pro 5G (Morning Mist, 128 GB)  (8 GB RAM)",
            thumbnail:"https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/c/5/t/-original-imaggceeagthynsm.jpeg?q=70",
            images: [
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/p/o/v/-original-imaggceehjk8wbzr.jpeg?q=70", 
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/p/l/u/-original-imaggceefdqp3wa8.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/r/h/q/-original-imaggceerqrnxfgr.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/y/y/w/-original-imaggceedfuzrbwp.jpeg?q=70"
            ],
            description:"Rear Quad Camera Co-Developed by Hasselblad, 48 MP Main camera, 50 MP Ultra Wide Angle Camera with Sensor size of 1/1.56'', 8 MP Telepoto Lens, 2 MP Monochorme Lens,16 MP Front Camera Qualcomm Snapdragon 888 Processor with Adreno 660 GPU 6.7 Inches Fluid AMOLED Display with 120Hz refresh rate with Latest LTPO technology OnePlus Oxygen OS based on Andriod 11 Comes with 4500 mAh Battery with 65W Wired Charging and 50W Wireless Charging capability",
        },
    ],
}
app.get('/catogory/smartphones', (req, res) => {
    res.send(smartphones)
},);
