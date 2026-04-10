# @itunified.io/mcp-oracle-ol

> dbx MCP Oracle Linux adapter — OS operations

[![npm](https://img.shields.io/npm/v/@itunified.io/mcp-oracle-ol)](https://www.npmjs.com/package/@itunified.io/mcp-oracle-ol)
[![License](https://img.shields.io/badge/license-AGPL--3.0-blue)](LICENSE)

Part of the [dbx multi-database management platform](https://github.com/itunified-io/dbx) — a thin TypeScript MCP adapter wrapping `dbxcli` via `execFile`. The Go binary handles connection, license, SSH allowlist, audit, and execution.

## Architecture

```
LLM <-> MCP Protocol <-> This Adapter <-> execFile("dbxcli") <-> Oracle Linux Host (SSH)
```

## Prerequisites

- Node.js >= 20.0.0
- `dbxcli` binary on PATH (from [dbx](https://github.com/itunified-io/dbx))
- SSH access configured for target hosts

## Installation

```bash
npm install -g @itunified.io/mcp-oracle-ol
```

### Claude Desktop Configuration

```json
{
  "mcpServers": {
    "oracle-ol": {
      "command": "npx",
      "args": ["-y", "@itunified.io/mcp-oracle-ol"]
    }
  }
}
```

## Tools (20)

### Package (5)

| Tool | Description |
|------|-------------|
| `oracle_linux_package_list` | List installed RPM packages |
| `oracle_linux_package_install` | Install an RPM package |
| `oracle_linux_package_remove` | Remove an installed package |
| `oracle_linux_package_update` | Update packages |
| `oracle_linux_package_search` | Search available packages |

### Kernel (3)

| Tool | Description |
|------|-------------|
| `oracle_linux_kernel_info` | Kernel version and boot info |
| `oracle_linux_kernel_parameters` | Active sysctl parameters |
| `oracle_linux_kernel_modules` | Loaded kernel modules |

### Storage (4)

| Tool | Description |
|------|-------------|
| `oracle_linux_storage_df` | Filesystem disk usage |
| `oracle_linux_storage_lvm_list` | LVM logical volumes |
| `oracle_linux_storage_asm_devices` | ASM disk devices |
| `oracle_linux_storage_io_stats` | Block device I/O stats |

### Network (4)

| Tool | Description |
|------|-------------|
| `oracle_linux_network_interfaces` | Network interfaces |
| `oracle_linux_network_routes` | Routing table |
| `oracle_linux_network_dns` | DNS resolver config |
| `oracle_linux_network_ntp` | NTP sync status |

### Security (4)

| Tool | Description |
|------|-------------|
| `oracle_linux_security_firewall_rules` | Active firewall rules |
| `oracle_linux_security_selinux_status` | SELinux mode and denials |
| `oracle_linux_security_user_list` | OS users and groups |
| `oracle_linux_security_sshd_config` | SSHD configuration |

## Skills

| Skill | Slash Command | Description |
|-------|--------------|-------------|
| OL Health | `/ol-health` | OS health check (CPU, memory, disk, network) |
| OL Harden | `/ol-harden` | Security hardening assessment |
| OL Test | `/ol-test` | Live test all tools against a target |

## License

AGPL-3.0 — see [LICENSE](LICENSE) for details.

---

Built by [ITUNIFIED GmbH](https://itunified.io) | Part of the [dbx ecosystem](https://github.com/itunified-io/dbx)
