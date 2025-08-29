'use client'

import { Switch } from '@workspace/ui/components/switch'
import { useState } from "react"

export default function SwitchForm() {
  const [airplaneMode, setAirplaneMode] = useState(false)
  const [wifi, setWifi] = useState(true)
  const [bluetooth, setBluetooth] = useState(false)

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Switch isSelected={airplaneMode} onSelectionChange={setAirplaneMode}>
          Airplane mode
        </Switch>
        <Switch isSelected={wifi} onSelectionChange={setWifi}>
          Wi-Fi
        </Switch>
        <Switch isSelected={bluetooth} onSelectionChange={setBluetooth}>
          Bluetooth
        </Switch>
      </div>
      <div className="text-sm text-muted-foreground">
        Airplane mode: {airplaneMode ? "On" : "Off"} | 
        Wi-Fi: {wifi ? "On" : "Off"} | 
        Bluetooth: {bluetooth ? "On" : "Off"}
      </div>
    </div>
  )
}
