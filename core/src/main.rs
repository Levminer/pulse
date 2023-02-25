#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use sysinfo::{ProcessExt, System, SystemExt};

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_processes])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn get_processes() -> String {
    let mut sys = System::new_all();

    sys.refresh_all();

    let mut values = String::new();

    for (pid, process) in sys.processes() {
        values += &format!("[{}] {} {:?} \n", pid, process.name(), process.exe());
    }

    return values.to_string();
}
