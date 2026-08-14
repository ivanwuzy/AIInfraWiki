# 飞诺门阵横向比较：边缘部署替代路径的官方资料摘录

> Source: https://raw.githubusercontent.com/kubeedge/kubeedge/master/README.md；https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/IN/QuickStart.html
> Collected: 2026-08-09
> Published: Unknown (持续维护文档)

以下为开源项目或厂商官方技术文档摘录。它们用于说明机器人/边缘部署买方的替代路径，不表示这些项目与飞诺门阵存在商业、技术或客户关系。

## KubeEdge

KubeEdge is built upon Kubernetes and extends native containerized application orchestration and device management to hosts at the Edge. It consists of cloud part and edge part, provides core infrastructure support for networking, application deployment and metadata synchronization between cloud and edge. It also supports MQTT which enables edge devices to access through edge nodes.

With KubeEdge it is easy to get and deploy existing complicated machine learning, image recognition, event processing and other high level applications to the Edge. With business logic running at the Edge, much larger volumes of data can be secured & processed locally where the data is produced. With data processed at the Edge, the responsiveness is increased dramatically and data privacy is protected.

Advantages：Kubernetes-native support；Cloud-Edge Reliable Collaboration；Edge Autonomy；Edge Devices Management；Extremely Lightweight Edge Agent.

KubeEdge is a graduation-level hosted project by the Cloud Native Computing Foundation (CNCF). KubeEdge is under the Apache 2.0 license.

## NVIDIA Jetson Linux Developer Guide

页面标题：Quick Start — NVIDIA Jetson Linux Developer Guide。

文档导航显示 Jetson Software Architecture、Jetson Orin Series、Kernel、Multimedia、Camera Development、Security、Communications、Platform Power and Performance、Jetson Module Adaptation and Bring-Up、Controller Area Network (CAN)、Jetson Linux Toolchain、Debugging on Jetson Platforms 等模块。

上述内容只说明 Jetson 是一条可审阅的端侧硬件/软件开发路径；不构成其性能或适配某一特定人形机器人产品的证明。
