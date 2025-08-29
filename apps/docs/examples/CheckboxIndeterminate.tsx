"use client";

import { Checkbox } from "@workspace/ui/components/checkbox";
import { useState } from "react";

export function CheckboxIndeterminate() {
  const [checkedItems, setCheckedItems] = useState([false, false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const handleAllChange = (checked: boolean) => {
    setCheckedItems(checkedItems.map(() => checked));
  };

  const handleItemChange = (index: number, checked: boolean) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = checked;
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className="space-y-3">
      <Checkbox
        isSelected={allChecked}
        isIndeterminate={isIndeterminate}
        onSelectionChange={handleAllChange}
      >
        Select all
      </Checkbox>
      <div className="ml-4 space-y-2">
        <Checkbox
          isSelected={checkedItems[0]}
          onSelectionChange={(checked) => handleItemChange(0, checked)}
        >
          Item 1
        </Checkbox>
        <Checkbox
          isSelected={checkedItems[1]}
          onSelectionChange={(checked) => handleItemChange(1, checked)}
        >
          Item 2
        </Checkbox>
        <Checkbox
          isSelected={checkedItems[2]}
          onSelectionChange={(checked) => handleItemChange(2, checked)}
        >
          Item 3
        </Checkbox>
      </div>
    </div>
  );
}
