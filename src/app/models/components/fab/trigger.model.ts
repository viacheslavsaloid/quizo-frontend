export interface FabTrigger {
  icon: string;
  func: () => void;
  items?: FabTrigger[];
}
