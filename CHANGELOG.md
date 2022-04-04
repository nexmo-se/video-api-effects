# 1.0.0-rc1 (Apr 04, 2022)

- adding pausing, enable/disable effect
- enabling switch source
- change interface: Extract BackroundEffectProcessor class from BackgroundEffect:
BackroundEffectProcessor is responsible for the lifecycle, allowing pausing, switching source, disabling the effect while always keeping one steady output stream.
BackgroundEffect and its implementation is responsible for the actual background replacement effect
  
# 0.2.0 (Nov 18, 2021)

- adding virtual background support

# 0.1.0 (Nov 04, 2021)

- first release with BackgroundBlur support
