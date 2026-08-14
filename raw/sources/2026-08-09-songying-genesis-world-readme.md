# Genesis World 开源项目说明

> Source: https://raw.githubusercontent.com/Genesis-Embodied-AI/Genesis/main/README.md
> Collected: 2026-08-09
> Published: Unknown

以下为项目 README 原文摘录：

> Genesis World is a simulation platform for physical AI developments. It combines a unified multi-physics engine, a photo-realistic renderer (Nyx), and a cross-platform compiler (Quadrants) behind a Pythonic simulation interface.

> Genesis World is designed to scale from a single laptop kernel to datacenter-grade GPUs, while remaining easy to read, extend, and embed in research code.

> It was previously named Genesis and started as an academic project since Dec 2024, and its development is now officially supported by Genesis AI.

> Simulation Interface — the user-facing API: asset parsing (URDF, MJCF, OBJ, GLB, USD, …), entity accessors, controllers, sensors, parallel and heterogeneous environments, and a built-in GUI.

> Physics — a unified multi-physics engine integrating Rigid, FEM, MPM, Particle (PBD / SPH), uipc, an explicit coupler, and SAP, all sharing one scene and one state.

> Compiler — Quadrants lowers Python kernel code to CUDA, AMD ROCm, Apple Metal, Vulkan, x86, and ARM64.

采集限制：该 README 为项目自述，用于说明开源替代路线的技术覆盖；未给出与 ORCA 的同任务基准，也不证明任何一方的生产部署能力。
