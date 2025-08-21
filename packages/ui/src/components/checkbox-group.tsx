import { CheckboxGroup as AriaCheckboxGroup, Checkbox, Label } from "react-aria-components";

export function CheckboxGroup() {
  return (
    <AriaCheckboxGroup>
      <Label>Favorite sports</Label>
      <Checkbox value="soccer">
        <div className="checkbox" aria-hidden="true">
          <svg viewBox="0 0 18 18">
            <polyline points="1 9 7 14 15 4" />
          </svg>
        </div>
        Soccer
      </Checkbox>
      <Checkbox value="baseball">
        <div className="checkbox" aria-hidden="true">
          <svg viewBox="0 0 18 18">
            <polyline points="1 9 7 14 15 4" />
          </svg>
        </div>
        Baseball
      </Checkbox>
      <Checkbox value="basketball">
        <div className="checkbox" aria-hidden="true">
          <svg viewBox="0 0 18 18">
            <polyline points="1 9 7 14 15 4" />
          </svg>
        </div>
        Basketball
      </Checkbox>
    </AriaCheckboxGroup>
  );
}
