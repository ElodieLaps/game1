import Statistics from "./Statistics";

export const _races = {
  elf: "ELF",
  dward: "DWARF",
  human: "HUMAN",
};

class Race {
  id;
  statistics;
  availableRoles;
  constructor(id: string, statistics: Statistics[], availableRoles: any[]) {
    this.id = id;
    this.statistics = statistics;
    this.availableRoles = availableRoles;
  }
}

export default Race;
