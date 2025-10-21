# LightRays Component

A high-performance WebGL-powered light rays effect component for React applications.

## Features

- **WebGL-powered**: High-performance rendering using GPU
- **Responsive**: Automatically adapts to container size
- **Mobile-optimized**: Adjusts settings for mobile devices
- **Intersection Observer**: Only renders when visible
- **Mouse interaction**: Rays can follow mouse movement
- **Multiple origins**: Rays can come from 8 different directions
- **Customizable**: Extensive customization options

## Installation

No additional dependencies required. The component uses native WebGL APIs.

## Basic Usage

```tsx
import LightRays from './components/LightRays';

function App() {
  return (
    <div className="w-full h-screen relative">
      {/* Your content */}
      <div className="absolute inset-0 z-10">
        <LightRays />
      </div>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `raysOrigin` | `'top-center' \| 'top-left' \| 'top-right' \| 'left' \| 'right' \| 'bottom-center' \| 'bottom-left' \| 'bottom-right'` | `'top-center'` | Where rays originate from |
| `raysColor` | `string` | `'#ffffff'` | Color of the rays (hex format) |
| `raysSpeed` | `number` | `1` | Animation speed |
| `lightSpread` | `number` | `1` | How spread out the rays are |
| `rayLength` | `number` | `2` | Length of the rays |
| `pulsating` | `boolean` | `false` | Whether rays pulse |
| `fadeDistance` | `number` | `1.0` | How far rays fade |
| `saturation` | `number` | `1.0` | Color saturation |
| `followMouse` | `boolean` | `true` | Rays follow mouse movement |
| `mouseInfluence` | `number` | `0.1` | How much mouse affects rays |
| `noiseAmount` | `number` | `0.0` | Add noise to the effect |
| `distortion` | `number` | `0.0` | Add distortion effects |
| `introAnimation` | `boolean` | `true` | Fade-in animation |

## Examples

### Dramatic Top-Down Rays
```tsx
<LightRays
  raysOrigin="top-center"
  raysColor="#ff6b6b"
  raysSpeed={1.5}
  lightSpread={0.8}
  rayLength={3}
  pulsating={true}
  mouseInfluence={0.2}
/>
```

### Subtle Side Lighting
```tsx
<LightRays
  raysOrigin="left"
  raysColor="#4ecdc4"
  raysSpeed={0.5}
  lightSpread={2}
  rayLength={1.5}
  followMouse={false}
/>
```

### Bottom-Up Rays
```tsx
<LightRays
  raysOrigin="bottom-center"
  raysColor="#ffd93d"
  raysSpeed={0.8}
  lightSpread={1.2}
  rayLength={2.5}
  pulsating={true}
  mouseInfluence={0.15}
/>
```

## Performance Considerations

- The component automatically handles WebGL context cleanup
- Uses requestAnimationFrame for smooth animations
- Only renders when the component is visible in the viewport
- Automatically adjusts for device pixel ratio

## Browser Compatibility

- Requires WebGL support (all modern browsers)
- Gracefully degrades if WebGL is not available
- Works on both desktop and mobile devices

## Troubleshooting

If you see "WebGL not available", the component will display a fallback message. This usually means:
- WebGL is disabled in the browser
- Running on an older device without WebGL support
- WebGL context creation failed

## License

This component is part of your project and follows the same license terms.
