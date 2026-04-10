import { z } from "zod";
import type { ToolDefinition } from "./plugin.js";

// ─── Oracle Linux OS Operations (20 tools) ──────────────────────────
// Maps 1:1 to dbxcli linux <group> <action> --format json

const target = z.string().describe("Target name from ~/.dbx/targets/");

export const tools: ToolDefinition[] = [
  // ── Package (5 tools) ──────────────────────────────────────────────
  {
    name: "oracle_linux_package_list",
    description: "List installed RPM packages with version, release, arch, and install date",
    inputSchema: {
      target,
      filter: z.string().optional().describe("Filter by package name pattern"),
    },
    domain: "linux",
    action: "package list",
  },
  {
    name: "oracle_linux_package_install",
    description: "Install an RPM package via yum/dnf. Requires SSH access to the target host",
    inputSchema: {
      target,
      name: z.string().describe("Package name to install"),
    },
    domain: "linux",
    action: "package install",
  },
  {
    name: "oracle_linux_package_remove",
    description: "Remove an installed RPM package. Requires SSH access to the target host",
    inputSchema: {
      target,
      name: z.string().describe("Package name to remove"),
    },
    domain: "linux",
    action: "package remove",
  },
  {
    name: "oracle_linux_package_update",
    description: "Update packages to latest available version. Updates all if no name specified",
    inputSchema: {
      target,
      name: z.string().optional().describe("Package name (all if omitted)"),
    },
    domain: "linux",
    action: "package update",
  },
  {
    name: "oracle_linux_package_search",
    description: "Search available packages in configured yum/dnf repositories",
    inputSchema: {
      target,
      query: z.string().describe("Search query"),
    },
    domain: "linux",
    action: "package search",
  },

  // ── Kernel (3 tools) ──────────────────────────────────────────────
  {
    name: "oracle_linux_kernel_info",
    description: "Current kernel version, release, architecture, UEK version, and boot parameters",
    inputSchema: { target },
    domain: "linux",
    action: "kernel info",
  },
  {
    name: "oracle_linux_kernel_parameters",
    description: "Active kernel parameters (sysctl) with current values — useful for Oracle tuning verification",
    inputSchema: {
      target,
      filter: z.string().optional().describe("Filter by parameter name pattern (e.g., 'vm.', 'kernel.')"),
    },
    domain: "linux",
    action: "kernel parameters",
  },
  {
    name: "oracle_linux_kernel_modules",
    description: "Loaded kernel modules with size, dependencies, and use count",
    inputSchema: {
      target,
      filter: z.string().optional().describe("Filter by module name"),
    },
    domain: "linux",
    action: "kernel modules",
  },

  // ── Storage (4 tools) ─────────────────────────────────────────────
  {
    name: "oracle_linux_storage_df",
    description: "Filesystem disk usage (df) — mount point, size, used, available, percent, filesystem type",
    inputSchema: { target },
    domain: "linux",
    action: "storage df",
  },
  {
    name: "oracle_linux_storage_lvm_list",
    description: "LVM logical volumes with VG, size, path, and mount point — critical for Oracle datafile placement",
    inputSchema: { target },
    domain: "linux",
    action: "storage lvm-list",
  },
  {
    name: "oracle_linux_storage_asm_devices",
    description: "ASM candidate and active disk devices with path, size, header status, and diskgroup membership",
    inputSchema: { target },
    domain: "linux",
    action: "storage asm-devices",
  },
  {
    name: "oracle_linux_storage_io_stats",
    description: "Block device I/O statistics — reads/writes per second, throughput, await, utilization",
    inputSchema: { target },
    domain: "linux",
    action: "storage io-stats",
  },

  // ── Network (4 tools) ─────────────────────────────────────────────
  {
    name: "oracle_linux_network_interfaces",
    description: "Network interfaces with IP address, MAC, MTU, speed, status, and bonding info",
    inputSchema: { target },
    domain: "linux",
    action: "network interfaces",
  },
  {
    name: "oracle_linux_network_routes",
    description: "Routing table entries — destination, gateway, interface, metric",
    inputSchema: { target },
    domain: "linux",
    action: "network routes",
  },
  {
    name: "oracle_linux_network_dns",
    description: "DNS resolver configuration — nameservers, search domains, resolv.conf contents",
    inputSchema: { target },
    domain: "linux",
    action: "network dns",
  },
  {
    name: "oracle_linux_network_ntp",
    description: "NTP/chrony time synchronization status — offset, jitter, reference, stratum",
    inputSchema: { target },
    domain: "linux",
    action: "network ntp",
  },

  // ── Security (4 tools) ────────────────────────────────────────────
  {
    name: "oracle_linux_security_firewall_rules",
    description: "Active firewall rules (iptables/firewalld) — chain, target, protocol, source, destination, ports",
    inputSchema: { target },
    domain: "linux",
    action: "security firewall-rules",
  },
  {
    name: "oracle_linux_security_selinux_status",
    description: "SELinux mode (enforcing/permissive/disabled), policy type, and recent denials",
    inputSchema: { target },
    domain: "linux",
    action: "security selinux-status",
  },
  {
    name: "oracle_linux_security_user_list",
    description: "OS users with UID, GID, home directory, shell, and group memberships (oracle, grid, dba, oinstall)",
    inputSchema: { target },
    domain: "linux",
    action: "security user-list",
  },
  {
    name: "oracle_linux_security_sshd_config",
    description: "SSHD configuration — authentication methods, permitted users, port, protocol settings",
    inputSchema: { target },
    domain: "linux",
    action: "security sshd-config",
  },
];
