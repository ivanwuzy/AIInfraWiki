# AutoDL GPU性能实测 官方来源摘录

> URL: https://www.autodl.com/docs/gpu_perf/
> Collected: 2026-08-09
> Published: 未知（页面截至抓取日可见）

AutoDL帮助文档
跳转至
性能实测
¶
只看官方算力大小不完全能体现出不同GPU的差异和好坏，比如显存带宽对最终耗时也会产生较大影响，这里以深度学习典型任务为例进行实测对比。
测试说明：
使用PyTorch=1.9.0在AutoDL不同GPU(均为单卡测试)上实测
网络的输入为使用torch.zero在内存中构造的伪数据，因此不包含CPU预处理数据的负载和额外IO的影响，主要是GPU本身的性能占主导
测试ResNet50和ViT Transformer两种算法。ResNet网络包含激活较多，除了本身算力，显存的带宽也对性能有较大影响。ViT Transfomer卷积多，本身算力大小占主要因素
包含单精FP32和半精FP16（非混合精度）的测试结果，请根据自己的需要进行对比
GPU显存
大小也是重要的使用考量因素，关于GPU的账面参数对比可以参考
文档
，硬件更详细的参数可以从这个
网址
查询。
Tesla P40
Tesla T4
TITAN Xp
1080 Ti
2080 Ti
V100
3060
3080
3080 Ti
3090
3090 Ti
A4000
A10
A5000
A40
A100
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 434.37 images/s in 4.420s.
Iteration 1, 439.35 images/s in 4.370s.
Iteration 2, 439.24 images/s in 4.371s.
Iteration 3, 439.23 images/s in 4.371s.
Iteration 4, 439.14 images/s in 4.372s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 496.90 images/s in 3.864s.
Iteration 1, 502.11 images/s in 3.824s.
Iteration 2, 501.87 images/s in 3.826s.
Iteration 3, 502.22 images/s in 3.823s.
Iteration 4, 501.90 images/s in 3.825s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 142.16 images/s in 13.506s.
Iteration 1, 142.32 images/s in 13.491s.
Iteration 2, 142.16 images/s in 13.506s.
Iteration 3, 142.13 images/s in 13.509s.
Iteration 4, 142.09 images/s in 13.513s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 176.70 images/s in 10.866s.
Iteration 1, 177.25 images/s in 10.832s.
Iteration 2, 176.86 images/s in 10.856s.
Iteration 3, 176.76 images/s in 10.862s.
Iteration 4, 176.73 images/s in 10.864s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 971.00 images/s in 1.977s.
Iteration 1, 1021.61 images/s in 1.879s.
Iteration 2, 1016.88 images/s in 1.888s.
Iteration 3, 1015.16 images/s in 1.891s.
Iteration 4, 1015.67 images/s in 1.890s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 483.40 images/s in 3.972s.
Iteration 1, 495.59 images/s in 3.874s.
Iteration 2, 494.61 images/s in 3.882s.
Iteration 3, 494.01 images/s in 3.887s.
Iteration 4, 493.37 images/s in 3.892s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 359.15 images/s in 5.346s.
Iteration 1, 364.26 images/s in 5.271s.
Iteration 2, 361.07 images/s in 5.317s.
Iteration 3, 359.90 images/s in 5.335s.
Iteration 4, 359.32 images/s in 5.343s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 103.59 images/s in 18.535s.
Iteration 1, 102.20 images/s in 18.786s.
Iteration 2, 100.97 images/s in 19.015s.
Iteration 3, 99.97 images/s in 19.206s.
Iteration 4, 99.24 images/s in 19.347s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 473.80 images/s in 4.052s.
Iteration 1, 511.13 images/s in 3.756s.
Iteration 2, 511.42 images/s in 3.754s.
Iteration 3, 511.76 images/s in 3.752s.
Iteration 4, 511.76 images/s in 3.752s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 664.40 images/s in 2.890s.
Iteration 1, 676.98 images/s in 2.836s.
Iteration 2, 676.98 images/s in 2.836s.
Iteration 3, 677.14 images/s in 2.835s.
Iteration 4, 676.73 images/s in 2.837s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 148.05 images/s in 12.969s.
Iteration 1, 147.34 images/s in 13.031s.
Iteration 2, 146.56 images/s in 13.100s.
Iteration 3, 146.33 images/s in 13.121s.
Iteration 4, 146.14 images/s in 13.138s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 194.03 images/s in 9.896s.
Iteration 1, 194.02 images/s in 9.896s.
Iteration 2, 193.84 images/s in 9.905s.
Iteration 3, 193.61 images/s in 9.917s.
Iteration 4, 193.37 images/s in 9.929s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 510.45 images/s in 3.761s.
Iteration 1, 519.67 images/s in 3.695s.
Iteration 2, 518.69 images/s in 3.702s.
Iteration 3, 518.02 images/s in 3.706s.
Iteration 4, 516.89 images/s in 3.715s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 635.18 images/s in 3.023s.
Iteration 1, 639.56 images/s in 3.002s.
Iteration 2, 640.22 images/s in 2.999s.
Iteration 3, 639.92 images/s in 3.000s.
Iteration 4, 638.53 images/s in 3.007s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 165.95 images/s in 11.570s.
Iteration 1, 165.96 images/s in 11.569s.
Iteration 2, 165.46 images/s in 11.604s.
Iteration 3, 165.08 images/s in 11.631s.
Iteration 4, 164.94 images/s in 11.641s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 194.01 images/s in 9.897s.
Iteration 1, 194.03 images/s in 9.895s.
Iteration 2, 193.38 images/s in 9.929s.
Iteration 3, 193.00 images/s in 9.948s.
Iteration 4, 192.78 images/s in 9.960s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 1358.44 images/s in 1.413s.
Iteration 1, 1869.90 images/s in 1.027s.
Iteration 2, 1870.04 images/s in 1.027s.
Iteration 3, 1869.58 images/s in 1.027s.
Iteration 4, 1869.71 images/s in 1.027s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 969.06 images/s in 1.981s.
Iteration 1, 1002.68 images/s in 1.915s.
Iteration 2, 1002.68 images/s in 1.915s.
Iteration 3, 1001.45 images/s in 1.917s.
Iteration 4, 1000.07 images/s in 1.920s
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 758.33 images/s in 2.532s.
Iteration 1, 809.01 images/s in 2.373s.
Iteration 2, 808.82 images/s in 2.374s.
Iteration 3, 807.08 images/s in 2.379s.
Iteration 4, 804.72 images/s in 2.386s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 210.92 images/s in 9.103s.
Iteration 1, 210.92 images/s in 9.103s.
Iteration 2, 210.07 images/s in 9.140s.
Iteration 3, 209.11 images/s in 9.182s.
Iteration 4, 208.69 images/s in 9.200s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 2290.81 images/s in 0.838s.
Iteration 1, 2693.08 images/s in 0.713s.
Iteration 2, 2691.44 images/s in 0.713s.
Iteration 3, 2690.35 images/s in 0.714s.
Iteration 4, 2690.84 images/s in 0.714s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 1288.53 images/s in 1.490s.
Iteration 1, 1327.76 images/s in 1.446s.
Iteration 2, 1325.90 images/s in 1.448s.
Iteration 3, 1326.93 images/s in 1.447s.
Iteration 4, 1326.53 images/s in 1.447s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 914.28 images/s in 2.100s.
Iteration 1, 1080.01 images/s in 1.778s.
Iteration 2, 1079.36 images/s in 1.779s.
Iteration 3, 1077.90 images/s in 1.781s.
Iteration 4, 1077.25 images/s in 1.782s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 310.36 images/s in 6.186s.
Iteration 1, 312.70 images/s in 6.140s.
Iteration 2, 311.67 images/s in 6.160s.
Iteration 3, 310.90 images/s in 6.176s.
Iteration 4, 310.81 images/s in 6.177s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 835.98 images/s in 2.297s.
Iteration 1, 934.63 images/s in 2.054s.
Iteration 2, 932.55 images/s in 2.059s.
Iteration 3, 932.72 images/s in 2.058s.
Iteration 4, 932.74 images/s in 2.058s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 574.23 images/s in 3.344s.
Iteration 1, 582.74 images/s in 3.295s.
Iteration 2, 582.59 images/s in 3.296s.
Iteration 3, 582.60 images/s in 3.296s.
Iteration 4, 582.20 images/s in 3.298s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 405.17 images/s in 4.739s.
Iteration 1, 406.01 images/s in 4.729s.
Iteration 2, 405.60 images/s in 4.734s.
Iteration 3, 404.27 images/s in 4.749s.
Iteration 4, 403.33 images/s in 4.760s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 229.04 images/s in 8.383s.
Iteration 1, 229.54 images/s in 8.365s.
Iteration 2, 228.84 images/s in 8.390s.
Iteration 3, 228.83 images/s in 8.390s.
Iteration 4, 228.82 images/s in 8.391s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 1920.60 images/s in 1.000s.
Iteration 1, 2006.67 images/s in 0.957s.
Iteration 2, 2001.53 images/s in 0.959s.
Iteration 3, 2001.84 images/s in 0.959s.
Iteration 4, 2001.73 images/s in 0.959s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 1214.12 images/s in 1.581s.
Iteration 1, 1245.95 images/s in 1.541s.
Iteration 2, 1246.12 images/s in 1.541s.
Iteration 3, 1245.95 images/s in 1.541s.
Iteration 4, 1246.00 images/s in 1.541s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 914.68 images/s in 2.099s.
Iteration 1, 920.83 images/s in 2.085s.
Iteration 2, 918.87 images/s in 2.090s.
Iteration 3, 916.63 images/s in 2.095s.
Iteration 4, 915.49 images/s in 2.097s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 519.68 images/s in 3.695s.
Iteration 1, 524.02 images/s in 3.664s.
Iteration 2, 522.04 images/s in 3.678s.
Iteration 3, 521.62 images/s in 3.681s.
Iteration 4, 521.24 images/s in 3.684s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 2044.40 images/s in 0.939s.
Iteration 1, 2274.77 images/s in 0.844s.
Iteration 2, 2273.13 images/s in 0.845s.
Iteration 3, 2276.35 images/s in 0.843s.
Iteration 4, 2272.15 images/s in 0.845s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 1351.29 images/s in 1.421s.
Iteration 1, 1410.54 images/s in 1.361s.
Iteration 2, 1407.80 images/s in 1.364s.
Iteration 3, 1405.99 images/s in 1.366s.
Iteration 4, 1407.29 images/s in 1.364s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 928.04 images/s in 2.069s.
Iteration 1, 928.41 images/s in 2.068s.
Iteration 2, 928.91 images/s in 2.067s.
Iteration 3, 929.32 images/s in 2.066s.
Iteration 4, 929.39 images/s in 2.066s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 536.28 images/s in 3.580s.
Iteration 1, 542.15 images/s in 3.541s.
Iteration 2, 541.91 images/s in 3.543s.
Iteration 3, 540.96 images/s in 3.549s.
Iteration 4, 541.44 images/s in 3.546s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 2294.06 images/s in 0.837s.
Iteration 1, 2391.29 images/s in 0.803s.
Iteration 2, 2396.06 images/s in 0.801s.
Iteration 3, 2394.62 images/s in 0.802s.
Iteration 4, 2402.61 images/s in 0.799s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 1453.34 images/s in 1.321s.
Iteration 1, 1490.90 images/s in 1.288s.
Iteration 2, 1491.79 images/s in 1.287s.
Iteration 3, 1493.76 images/s in 1.285s.
Iteration 4, 1494.50 images/s in 1.285s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 1044.44 images/s in 1.838s.
Iteration 1, 1047.37 images/s in 1.833s.
Iteration 2, 1046.37 images/s in 1.835s.
Iteration 3, 1044.68 images/s in 1.838s.
Iteration 4, 1043.91 images/s in 1.839s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 596.59 images/s in 3.218s.
Iteration 1, 599.41 images/s in 3.203s.
Iteration 2, 598.86 images/s in 3.206s.
Iteration 3, 597.92 images/s in 3.211s.
Iteration 4, 597.46 images/s in 3.214s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 2307.14 images/s in 0.832s.
Iteration 1, 2569.71 images/s in 0.747s.
Iteration 2, 2570.15 images/s in 0.747s.
Iteration 3, 2570.29 images/s in 0.747s.
Iteration 4, 2569.88 images/s in 0.747s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 1578.58 images/s in 1.216s.
Iteration 1, 1612.02 images/s in 1.191s.
Iteration 2, 1612.37 images/s in 1.191s.
Iteration 3, 1612.63 images/s in 1.191s.
Iteration 4, 1612.32 images/s in 1.191s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 1214.12 images/s in 1.581s.
Iteration 1, 1223.07 images/s in 1.570s.
Iteration 2, 1222.81 images/s in 1.570s.
Iteration 3, 1221.12 images/s in 1.572s.
Iteration 4, 1223.38 images/s in 1.569s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 686.56 images/s in 2.797s.
Iteration 1, 693.84 images/s in 2.767s.
Iteration 2, 693.32 images/s in 2.769s.
Iteration 3, 691.64 images/s in 2.776s.
Iteration 4, 691.63 images/s in 2.776s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 1254.25 images/s in 1.531s.
Iteration 1, 1311.96 images/s in 1.463s.
Iteration 2, 1311.90 images/s in 1.464s.
Iteration 3, 1312.18 images/s in 1.463s.
Iteration 4, 1312.14 images/s in 1.463s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 771.57 images/s in 2.488s.
Iteration 1, 784.02 images/s in 2.449s.
Iteration 2, 783.86 images/s in 2.449s.
Iteration 3, 783.59 images/s in 2.450s.
Iteration 4, 783.17 images/s in 2.452s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 663.73 images/s in 2.893s.
Iteration 1, 663.15 images/s in 2.895s.
Iteration 2, 658.92 images/s in 2.914s.
Iteration 3, 657.24 images/s in 2.921s.
Iteration 4, 654.88 images/s in 2.932s
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 402.74 images/s in 4.767s.
Iteration 1, 403.16 images/s in 4.762s.
Iteration 2, 401.44 images/s in 4.783s.
Iteration 3, 400.12 images/s in 4.799s.
Iteration 4, 399.10 images/s in 4.811s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 1697.60 images/s in 1.131s.
Iteration 1, 1757.48 images/s in 1.092s.
Iteration 2, 1754.84 images/s in 1.094s.
Iteration 3, 1754.40 images/s in 1.094s.
Iteration 4, 1754.48 images/s in 1.094s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 1016.25 images/s in 1.889s.
Iteration 1, 1036.64 images/s in 1.852s.
Iteration 2, 1035.70 images/s in 1.854s.
Iteration 3, 1035.60 images/s in 1.854s.
Iteration 4, 1035.16 images/s in 1.855s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 856.75 images/s in 2.241s.
Iteration 1, 871.17 images/s in 2.204s.
Iteration 2, 869.76 images/s in 2.208s.
Iteration 3, 867.95 images/s in 2.212s.
Iteration 4, 867.44 images/s in 2.213s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 505.03 images/s in 3.802s.
Iteration 1, 508.22 images/s in 3.778s.
Iteration 2, 507.10 images/s in 3.786s.
Iteration 3, 507.09 images/s in 3.786s.
Iteration 4, 506.34 images/s in 3.792s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 2059.14 images/s in 0.932s.
Iteration 1, 2121.97 images/s in 0.905s.
Iteration 2, 2118.47 images/s in 0.906s.
Iteration 3, 2118.64 images/s in 0.906s.
Iteration 4, 2118.01 images/s in 0.907s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 1243.93 images/s in 1.543s.
Iteration 1, 1261.84 images/s in 1.522s.
Iteration 2, 1260.91 images/s in 1.523s.
Iteration 3, 1258.10 images/s in 1.526s.
Iteration 4, 1258.15 images/s in 1.526s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 954.70 images/s in 2.011s.
Iteration 1, 953.66 images/s in 2.013s.
Iteration 2, 951.03 images/s in 2.019s.
Iteration 3, 949.82 images/s in 2.021s.
Iteration 4, 949.37 images/s in 2.022s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 603.20 images/s in 3.183s.
Iteration 1, 605.27 images/s in 3.172s.
Iteration 2, 604.12 images/s in 3.178s.
Iteration 3, 602.88 images/s in 3.185s.
Iteration 4, 601.29 images/s in 3.193s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 1837.41 images/s in 1.045s.
Iteration 1, 1892.04 images/s in 1.015s.
Iteration 2, 1893.29 images/s in 1.014s.
Iteration 3, 1892.99 images/s in 1.014s.
Iteration 4, 1892.73 images/s in 1.014s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 1102.49 images/s in 1.742s.
Iteration 1, 1115.45 images/s in 1.721s.
Iteration 2, 1118.49 images/s in 1.717s.
Iteration 3, 1117.32 images/s in 1.718s.
Iteration 4, 1117.80 images/s in 1.718s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 1155.09 images/s in 1.662s.
Iteration 1, 1153.70 images/s in 1.664s.
Iteration 2, 1152.89 images/s in 1.665s.
Iteration 3, 1150.99 images/s in 1.668s.
Iteration 4, 1150.53 images/s in 1.669s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 675.17 images/s in 2.844s.
Iteration 1, 680.69 images/s in 2.821s.
Iteration 2, 679.15 images/s in 2.827s.
Iteration 3, 678.90 images/s in 2.828s.
Iteration 4, 678.21 images/s in 2.831s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 3031.31 images/s in 0.633s.
Iteration 1, 4145.68 images/s in 0.463s.
Iteration 2, 4143.08 images/s in 0.463s.
Iteration 3, 4145.51 images/s in 0.463s.
Iteration 4, 4144.79 images/s in 0.463s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 2588.47 images/s in 0.742s.
Iteration 1, 2775.77 images/s in 0.692s.
Iteration 2, 2771.13 images/s in 0.693s.
Iteration 3, 2780.56 images/s in 0.691s.
Iteration 4, 2764.96 images/s in 0.694s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 1592.06 images/s in 1.206s.
Iteration 1, 1690.54 images/s in 1.136s.
Iteration 2, 1691.74 images/s in 1.135s.
Iteration 3, 1692.93 images/s in 1.134s.
Iteration 4, 1691.21 images/s in 1.135s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 1438.29 images/s in 1.335s.
Iteration 1, 1491.85 images/s in 1.287s.
Iteration 2, 1491.50 images/s in 1.287s.
Iteration 3, 1489.87 images/s in 1.289s.
Iteration 4, 1489.75 images/s in 1.289s.
以下是40系列、L20/L40、H100/H800的性能测试数据:
4080
vGPU-32GB
vGPU-48GB
4090
4090 D
L40
L20
H800
H20
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 2820.86 images/s in 0.681s.
Iteration 1, 3011.58 images/s in 0.638s.
Iteration 2, 3011.31 images/s in 0.638s.
Iteration 3, 3008.65 images/s in 0.638s.
Iteration 4, 3008.97 images/s in 0.638s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 1482.35 images/s in 1.295s.
Iteration 1, 1523.34 images/s in 1.260s.
Iteration 2, 1523.15 images/s in 1.261s.
Iteration 3, 1523.25 images/s in 1.260s.
Iteration 4, 1523.21 images/s in 1.260s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 1370.73 images/s in 1.401s.
Iteration 1, 1407.86 images/s in 1.364s.
Iteration 2, 1407.92 images/s in 1.364s.
Iteration 3, 1407.89 images/s in 1.364s.
Iteration 4, 1407.85 images/s in 1.364s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 754.60 images/s in 2.544s.
Iteration 1, 765.20 images/s in 2.509s.
Iteration 2, 764.60 images/s in 2.511s.
Iteration 3, 763.97 images/s in 2.513s.
Iteration 4, 764.00 images/s in 2.513s.
PyTorch==2.3.0 CUDA==12.01
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 2380.08 images/s in 0.807s.
Iteration 1, 3507.68 images/s in 0.547s.
Iteration 2, 3505.43 images/s in 0.548s.
Iteration 3, 3506.66 images/s in 0.548s.
Iteration 4, 3506.87 images/s in 0.547s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 1353.57 images/s in 1.418s.
Iteration 1, 1705.04 images/s in 1.126s.
Iteration 2, 1705.20 images/s in 1.126s.
Iteration 3, 1705.16 images/s in 1.126s.
Iteration 4, 1705.30 images/s in 1.126s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 1389.24 images/s in 1.382s.
Iteration 1, 1741.58 images/s in 1.102s.
Iteration 2, 1741.14 images/s in 1.103s.
Iteration 3, 1739.23 images/s in 1.104s.
Iteration 4, 1737.59 images/s in 1.105s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 588.29 images/s in 3.264s.
Iteration 1, 606.75 images/s in 3.164s.
Iteration 2, 603.99 images/s in 3.179s.
Iteration 3, 601.70 images/s in 3.191s.
Iteration 4, 599.35 images/s in 3.203s.
PyTorch==2.5.1 CUDA==12.4
>>> ResNet50
Namespace(train=False, precision='float16', device=0, model='resnet50')
Iteration 0, 2798.41 images/s in 0.686s.
Iteration 1, 5022.34 images/s in 0.382s.
Iteration 2, 5020.86 images/s in 0.382s.
Iteration 3, 5019.98 images/s in 0.382s.
Iteration 4, 5020.47 images/s in 0.382s.
Namespace(train=False, precision='float32', device=0, model='resnet50')
Iteration 0, 1978.18 images/s in 0.971s.
Iteration 1, 2499.01 images/s in 0.768s.
Iteration 2, 2498.90 images/s in 0.768s.
Iteration 3, 2498.77 images/s in 0.768s.
Iteration 4, 2498.94 images/s in 0.768s.
>>> ViT Transformer
Namespace(train=False, precision='float16', device=0, model='vit_base_patch16_224')
Iteration 0, 1890.02 images/s in 1.016s.
Iteration 1, 2516.27 images/s in 0.763s.
Iteration 2, 2517.93 images/s in 0.763s.
Iteration 3, 2517.89 images/s in 0.763s.
Iteration 4, 2516.19 images/s in 0.763s.
Namespace(train=False, precision='float32', device=0, model='vit_base_patch16_224')
Iteration 0, 817.44 images/s in 2.349s.
Iteration 1, 880.29 images/s in 2.181s.
Iteration 2, 877.52 images/s in 2.188s.
Iteration 3, 875.31 images/s in 2.194s.
Iteration 4, 874.56 images/s in 2.195s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 3832.93 images/s in 0.501s.
Iteration 1, 4286.27 images/s in 0.448s.
Iteration 2, 4285.56 images/s in 0.448s.
Iteration 3, 4286.17 images/s in 0.448s.
Iteration 4, 4285.75 images/s in 0.448s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 2175.56 images/s in 0.883s.
Iteration 1, 2292.56 images/s in 0.837s.
Iteration 2, 2292.38 images/s in 0.838s.
Iteration 3, 2292.68 images/s in 0.837s.
Iteration 4, 2292.69 images/s in 0.837s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 1890.34 images/s in 1.016s.
Iteration 1, 2028.98 images/s in 0.946s.
Iteration 2, 2028.92 images/s in 0.946s.
Iteration 3, 2027.23 images/s in 0.947s.
Iteration 4, 2023.66 images/s in 0.949s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 1099.47 images/s in 1.746s.
Iteration 1, 1135.05 images/s in 1.692s.
Iteration 2, 1132.25 images/s in 1.696s.
Iteration 3, 1131.92 images/s in 1.696s.
Iteration 4, 1132.28 images/s in 1.696s.
在驱动为550.54.14下测试(相比4090的提升，可能为驱动上的优化带来的提升)
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 2941.52 images/s in 0.653s.
Iteration 1, 4723.46 images/s in 0.406s.
Iteration 2, 4723.64 images/s in 0.406s.
Iteration 3, 4723.43 images/s in 0.406s.
Iteration 4, 4723.54 images/s in 0.406s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 1948.26 images/s in 0.985s.
Iteration 1, 2442.01 images/s in 0.786s.
Iteration 2, 2442.06 images/s in 0.786s.
Iteration 3, 2442.20 images/s in 0.786s.
Iteration 4, 2442.24 images/s in 0.786s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 1921.61 images/s in 0.999s.
Iteration 1, 2359.63 images/s in 0.814s.
Iteration 2, 2358.23 images/s in 0.814s.
Iteration 3, 2358.28 images/s in 0.814s.
Iteration 4, 2358.27 images/s in 0.814s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 795.41 images/s in 2.414s.
Iteration 1, 835.84 images/s in 2.297s.
Iteration 2, 834.46 images/s in 2.301s.
Iteration 3, 832.31 images/s in 2.307s.
Iteration 4, 833.71 images/s in 2.303s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 3508.15 images/s in 0.547s.
Iteration 1, 3792.50 images/s in 0.506s.
Iteration 2, 3797.41 images/s in 0.506s.
Iteration 3, 3798.82 images/s in 0.505s.
Iteration 4, 3798.89 images/s in 0.505s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 1842.46 images/s in 1.042s.
Iteration 1, 1940.97 images/s in 0.989s.
Iteration 2, 1941.14 images/s in 0.989s.
Iteration 3, 1940.94 images/s in 0.989s.
Iteration 4, 1940.85 images/s in 0.989s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 1521.70 images/s in 1.262s.
Iteration 1, 1518.28 images/s in 1.265s.
Iteration 2, 1519.53 images/s in 1.264s.
Iteration 3, 1514.74 images/s in 1.268s.
Iteration 4, 1507.84 images/s in 1.273s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 903.33 images/s in 2.125s.
Iteration 1, 909.27 images/s in 2.112s.
Iteration 2, 906.62 images/s in 2.118s.
Iteration 3, 901.66 images/s in 2.129s.
Iteration 4, 899.00 images/s in 2.136s.
>>> ResNet50
Namespace(device=0, model='resnet50', precision='float16', train=False)
Iteration 0, 2943.74 images/s in 0.652s.
Iteration 1, 3070.92 images/s in 0.625s.
Iteration 2, 3071.46 images/s in 0.625s.
Iteration 3, 3071.46 images/s in 0.625s.
Iteration 4, 3071.51 images/s in 0.625s.
Namespace(device=0, model='resnet50', precision='float32', train=False)
Iteration 0, 1708.50 images/s in 1.124s.
Iteration 1, 1746.34 images/s in 1.099s.
Iteration 2, 1746.79 images/s in 1.099s.
Iteration 3, 1746.87 images/s in 1.099s.
Iteration 4, 1746.66 images/s in 1.099s.
>>> ViT Transformer
Namespace(device=0, model='vit_base_patch16_224', precision='float16', train=False)
Iteration 0, 1579.93 images/s in 1.215s.
Iteration 1, 1589.75 images/s in 1.208s.
Iteration 2, 1589.86 images/s in 1.208s.
Iteration 3, 1590.05 images/s in 1.208s.
Iteration 4, 1590.62 images/s in 1.207s.
Namespace(device=0, model='vit_base_patch16_224', precision='float32', train=False)
Iteration 0, 809.44 images/s in 2.372s.
Iteration 1, 818.51 images/s in 2.346s.
Iteration 2, 818.48 images/s in 2.346s.
Iteration 3, 818.46 images/s in 2.346s.
Iteration 4, 818.44 images/s in 2.346s.
>>> ResNet50
Namespace(train=False, precision='float16', device=0, model='resnet50')
Iteration 0, 3182.80 images/s in 0.603s.
Iteration 1, 8114.82 images/s in 0.237s.
Iteration 2, 8119.60 images/s in 0.236s.
Iteration 3, 8116.55 images/s in 0.237s.
Iteration 4, 8114.75 images/s in 0.237s.
Namespace(train=False, precision='float32', device=0, model='resnet50')
Iteration 0, 3409.18 images/s in 0.563s.
Iteration 1, 5582.19 images/s in 0.344s.
Iteration 2, 5581.61 images/s in 0.344s.
Iteration 3, 5582.83 images/s in 0.344s.
Iteration 4, 5585.93 images/s in 0.344s.
>>> ViT Transformer
Namespace(train=False, precision='float16', device=0, model='vit_base_patch16_224')
Iteration 0, 3175.96 images/s in 0.605s.
Iteration 1, 5818.70 images/s in 0.330s.
Iteration 2, 5820.69 images/s in 0.330s.
Iteration 3, 5811.54 images/s in 0.330s.
Iteration 4, 5812.47 images/s in 0.330s.
Namespace(train=False, precision='float32', device=0, model='vit_base_patch16_224')
Iteration 0, 1012.97 images/s in 1.895s.
Iteration 1, 1095.48 images/s in 1.753s.
Iteration 2, 1095.56 images/s in 1.753s.
Iteration 3, 1094.18 images/s in 1.755s.
Iteration 4, 1092.81 images/s in 1.757s.
>>> ResNet50
Namespace(train=False, precision='float16', device=0, model='resnet50')
Iteration 0, 1098.48 images/s in 1.748s.
Iteration 1, 4735.91 images/s in 0.405s.
Iteration 2, 4736.08 images/s in 0.405s.
Iteration 3, 4736.12 images/s in 0.405s.
Iteration 4, 4736.24 images/s in 0.405s.
Namespace(train=False, precision='float32', device=0, model='resnet50')
Iteration 0, 1676.70 images/s in 1.145s.
Iteration 1, 3191.54 images/s in 0.602s.
Iteration 2, 3191.80 images/s in 0.602s.
Iteration 3, 3191.68 images/s in 0.602s.
Iteration 4, 3191.59 images/s in 0.602s.
>>> ViT Transformer
Namespace(train=False, precision='float16', device=0, model='vit_base_patch16_224')
Iteration 0, 1440.53 images/s in 1.333s.
Iteration 1, 2262.77 images/s in 0.849s.
Iteration 2, 2262.85 images/s in 0.848s.
Iteration 3, 2262.73 images/s in 0.849s.
Iteration 4, 2263.06 images/s in 0.848s.
Namespace(train=False, precision='float32', device=0, model='vit_base_patch16_224')
Iteration 0, 592.16 images/s in 3.242s.
Iteration 1, 646.19 images/s in 2.971s.
Iteration 2, 644.67 images/s in 2.978s.
Iteration 3, 644.38 images/s in 2.980s.
Iteration 4, 643.00 images/s in 2.986s.
以下是50系列、RTX Pro 6000等Blackwell架构GPU的性能测试数据:
5090D
5090
RTX PRO 6000 Blackwell
RTX PRO 5000 Blackwell
使用PyTorch==2.8.0.dev20250418+cu128 预览版
>>> ResNet50
Namespace(train=False, precision='float16', device=0, model='resnet50')
Iteration 0, 3663.67 images/s in 0.524s.
Iteration 1, 6164.35 images/s in 0.311s.
Iteration 2, 6168.86 images/s in 0.311s.
Iteration 3, 6170.21 images/s 