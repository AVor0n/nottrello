export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';

type BaseType = 'normal' | 'action' | 'raised';
type CombineBaseType = 'outlined' | 'flat';
type ColorType = 'action' | 'info' | 'success' | 'warning' | 'danger' | 'utility';
type CombinedType = `${CombineBaseType}-${ColorType}`;
type ContrastedType = `${BaseType}-contrast`;

export type ButtonView = BaseType | CombineBaseType | CombinedType | ContrastedType;

type BasePinType = 'round' | 'brick' | 'circle';
export type PinType = `${BasePinType}-${BasePinType}`;
