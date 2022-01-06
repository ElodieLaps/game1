class Role {
  id;
  availableEquipments;
  availableAbilities;
  constructor(
    id: string,
    availableEquipments: any[],
    availableAbilities: any[]
  ) {
    this.id = id;
    this.availableEquipments = availableEquipments;
    this.availableAbilities = availableAbilities;
  }
}

export default Role;
