#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use serde::Serialize;
use std::path::Path;
use sysinfo::{Pid, ProcessExt, System, SystemExt};

#[derive(Debug, Serialize)]
pub struct Process {
    pub pid: i32,
    pub name: String,
    pub path: String,
}

impl Process {
    pub fn new(pid: &Pid, name: &str, path: &Path) -> Process {
        let pid = pid.to_string().parse().unwrap();
        let name = name.to_string();
        let path = path.to_str().unwrap().to_string();

        Process { pid, name, path }
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_processes])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn get_processes() -> Vec<Process> {
    let mut sys = System::new_all();

    sys.refresh_all();

    let mut values: Vec<Process> = Vec::new();

    for (pid, process) in sys.processes() {
        if process.exe().to_string_lossy() != "" {
            values.push(Process::new(pid, process.name(), process.exe()));
        }
    }

    return values;
}
