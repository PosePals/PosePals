# PosePals
<img align="right" width="100" height="100" src="/documentation/images/logo.png">

## Introduction
Welcome to **PosePals** - a revolutionary mobile application that blends the ancient practice of yoga with modern machine learning technology. Developed during the [Junction Hackathon 2023](https://www.junction2023.com/), PosePals is the first of its kind in the world of yoga, offering an innovative way to learn, rate, and challenge your friends or your past self in the execution of yoga postures.

## Concept
Yoga, traditionally known for its focus on mental and physical well-being rather than competition, can be challenging to quantify. Our solution, PosePals, introduces a fun and engaging way to compete against yourself or friends by scoring yoga postures. Utilizing advanced machine learning on mobile platforms, PosePals accurately judges yoga postures and provides a score based on the precision and body tension maintained against an ideal posture.

## Technology
At the heart of PosePals is a custom model trained using MediaPipe on eight NVIDIA A100 AI accelerators in around 7 hours. This model, optimized by us in a very long night-shift, combined with a smartwatch (optional, for heartbeat measurements), enables the app to deliver precise posture evaluation unlike any other existing yoga health app.

### Pose Judging
- **Java Native Interface with [Open-CV](https://github.com/opencv/opencv) and [NCNN](https://github.com/Tencent/ncnn)**: Runs locally on-device for real-time analysis.
- **Pytorch Training**: Utilizes 8x NVIDIA A100 AI-Accelerators on the [OpenPose]()-Dataset.
- **3D-Space Depth Analysis**: For accurate pose detection.

### Posture 3D-Model Generation
- **[I2L-MeshNet](https://github.com/mks0601/I2L-MeshNet_RELEASE) Reimplementation**: Converts images into .obj 3D files for posture previews.
- **Custom Pre- and Postprocessors**: Handles .obj and STL files using numpy, pywavefront, & trimesh.

### Frontend
- **Vue 3 with Tailwind CSS**: For sleek and responsive component styling.
- **Custom [Three.js](https://threejs.org/) Reimplementation**: For Vue 3 native compatibility and enhanced camera movement.

## Technical Achievements
- Custom-trained ML model tailored for yoga, optimized in C++ for fast execution on low-spec hardware.
- **World-first yoga posture detection system with accuracy ratings.**
- Custom Three.js integration in Vue 3 with advanced camera and shader support for explanation of the yoga postures.
- Around 10.000 Lines of Code written in a team of five in less than 48 hours.  
- Android app with smartwatch connectivity for heart rate monitoring.
- I2L-MeshNet integration for effortless scanning and generation of 3D-Models for new postures.

## Code Composition
- Low-Level C++: 65%
- JavaScript: 13%
- Java: 7%
- TypeScript: 6%
- Python: 5%
- Other (mainly CSS and Dockerfiles): 4%

## Team
PosePals was created by a team of five students from Germany: Katharina Bade, Alexander Lowa, Bileam Scheuvens, Torben Wetter, and Paul Goldschmidt. As finalists and winners of the German federal artificial intelligence competition, our diverse expertise contributed to the development of this unique application in less than 48 hours.

## Inspiration
Our core idea stemmed from the realization that yoga is a universally accessible sport enhancing mental health, yet it lacks quantifiable evaluation in health apps. PosePals bridges this gap, offering a novel way to experience yoga. Each workout in our app currently consists of five postures, each held for two minutes, providing a comprehensive yoga experience.

## Acknowledgements
**PosePals was developed for the ["Sense the Motion"](https://www.junction2023.com/challenges-2023/huawei) challenge by Huawei at the Junction Hackathon 2023 in Helsinki, Finland. We extend our gratitude to Huawei and the event organizers for providing us with this opportunity.**

### Technological Acknowledgements
Thanks to the many open-source projects that our solution relies on.

- [Open-CV](https://github.com/opencv/opencv)
- [NCNN by Tencent](https://github.com/Tencent/ncnn)
- [I2L-MeshNet](https://github.com/mks0601/I2L-MeshNet_RELEASE)
- [Three.js](https://github.com/mrdoob/three.js)
- [Vue.js](https://github.com/vuejs/core)

## Support and Contribution

Feel free to [open an issue](/issues) or [submit a pull request](/pulls) if you encounter any problems or want to contribute to this project.

## Licensing
Please take a look for more information about our license into the [corresponding file](LICENSE). Thank you!

---

**Note**: This project is in continuous development, and we welcome contributions and feedback to enhance the PosePals experience.

---

