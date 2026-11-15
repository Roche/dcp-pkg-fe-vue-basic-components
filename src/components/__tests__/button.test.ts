import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DcpButton from '../Button.vue';

describe('Button.vue', () => {
  it('should render button with default primary variant', () => {
    const wrapper = mount(DcpButton, {
      slots: {
        default: 'Click me'
      }
    });

    expect(wrapper.text()).toBe('Click me');
    expect(wrapper.classes()).toContain('primary');
  });

  it('should apply disabled state', () => {
    const wrapper = mount(DcpButton, {
      props: {
        disabled: true
      }
    });

    expect(wrapper.attributes('disabled')).toBeDefined();
    expect(wrapper.classes()).toContain('disabled');
  });
});