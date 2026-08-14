# RISC-V profiles and platform-fragmentation excerpts

> Source: https://raw.githubusercontent.com/riscv/riscv-profiles/main/src/rva-profile-overview-body.adoc ; https://raw.githubusercontent.com/riscv/riscv-profiles/main/src/rva23-profile.adoc ; https://www.qemu.org/docs/master/system/target-riscv.html
> Collected: 2026-08-11
> Published: Mixed (living specifications and project documentation)

## Original passages: RVA Profiles Rationale

RISC-V was designed to provide a highly modular and extensible instruction set and includes a large and growing set of standard extensions, where each standard extension is a bundle of instruction-set features.

For markets where a substantial fraction of software [is] to be delivered to end-customers in binary form, compatibility across multiple implementations from different RISC-V vendors is required.

The RVIA ISA extension ratification process ensures that all processor implementations that support a given extension implement the extension as specified, but does not ensure that a given set of extensions will be present in all implementations.

The primary goal of the RVA profiles is to align processor vendors targeting binary software markets, so software can rely on the existence of a certain set of ISA features in a particular generation of RISC-V implementations.

Without proactive alignment through RVA profiles, RISC-V will be uncompetitive, as even if a particular vendor implements a certain feature, if other vendors do not, then binary distributions will not generally use that feature and RISC-V implementations will be less competitive in binary app ecosystems.

## Original passages: RVA23 Profiles

The RVA23 profiles are intended to align implementations of RISC-V 64-bit application processors to allow binary software ecosystems to rely on a large set of guaranteed extensions and a small number of discoverable coarse-grain options. It is explicitly a non-goal of RVA23 to allow more hardware implementation flexibility by supporting only a minimal set of features and a large number of fine-grain extensions.

Only user-mode (RVA23U64) and supervisor-mode (RVA23S64) profiles are specified in this family.

The following mandatory extensions are new in RVA23U64:

- V Vector extension.
- Zvfhmin Vector minimal half-precision floating-point.
- Zvbb Vector basic bit-manipulation instructions.
- Zvkt Vector data-independent execution latency.

NOTE: V was optional in RVA22U64.

## Original passages: QEMU RISC-V System emulator documentation

QEMU has generally good support for RISC-V guests. It has support for several different machines. The reason we support so many is that RISC-V hardware is much more widely varying than x86 hardware. RISC-V CPUs are generally built into “system-on-chip” (SoC) designs created by many different companies with different devices, and these SoCs are then built into machines which can vary still further even if they use the same SoC.

Because RISC-V systems differ so much and in fundamental ways, typically operating system or firmware images intended to run on one machine will not run at all on any other. This is often surprising for new users who are used to the x86 world where every system looks like a standard PC. (Once the kernel has booted, most user space software cares much less about the detail of the hardware.)
