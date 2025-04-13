<script setup lang="ts">
import { computed } from 'vue';
import type { ButtonSize, ButtonView, PinType } from './BaseButton.types';
import styles from './BaseButton.module.css';

export interface BaseButtonProps {
  /** Размер кнопки, по умолчанию 'm' */
  size?: ButtonSize;
  /** Ширина кнопки
   * undefined - может выйти за пределы контейнера
   * 'auto' - если не умещается, то текст обрезается с ...
   * 'max' - растягивается на всю доступную ширину
   */
  width?: 'auto' | 'max';
  /** Вид кнопки, по умолчанию 'normal' */
  view?: ButtonView;
  /** Тип границ, по умолчанию 'round-round' */
  pin?: PinType;
  disabled?: boolean;
  loading?: boolean;
  selected?: boolean;
  /** Базовый тег для компонента, по умолчанию 'button' */
  component?: 'button' | 'router-link' | 'a';
  /** Если есть, при клике происходит переход по ссылке */
  href?: string;
  /** Аттрибут data-qa */
  qa?: string;
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  size: 'm',
  view: 'normal',
  disabled: false,
  loading: false,
  pin: 'round-round',
  component: 'button',
});

const classes = computed(() => {
  const [lPin, rPin] = props.pin.split('-');
  return {
    [styles.button]: true,
    [styles[`button--${props.size}`]]: true,
    [styles[`button--${props.view}`]]: true,
    [styles[`button--l_${lPin}`]]: true,
    [styles[`button--r_${rPin}`]]: true,
    [styles[`button--${props.width}`]]: props.width,
    [styles.buttonSelected]: props.selected,
    [styles.buttonDisabled]: props.disabled,
    [styles.buttonLoading]: props.loading,
  };
});
</script>

<template>
  <button :class="classes" v-bind="$attrs" :disabled="disabled || loading">
    <slot></slot>
  </button>
</template>
