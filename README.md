# Glash Framework

Glash는 HTML5 캔버스를 사용하여 간단한 그래픽 및 애니메이션을 그릴 수 있는 JavaScript 프레임워크입니다. Adobe Flash의 지원 종료로 인해 Flash 대체 기술로 사용될 수 있습니다.

## 기능

- 텍스트, 선, 사각형, 원, 이미지 그리기
- 다양한 이벤트 리스너 (click, mousemove, mousedown, mouseup, keydown, keyup)
- 애니메이션 기능

## Flash 지원 종료 대체

Adobe Flash는 2020년 12월 31일부로 공식적으로 지원이 종료되었습니다. 많은 웹사이트와 애플리케이션에서 Flash를 사용한 콘텐츠가 더 이상 실행되지 않기 때문에, HTML5 캔버스를 사용하는 대체 기술이 필요합니다. Glash는 이러한 대체 기술로서, Flash로 구현된 다양한 그래픽 및 애니메이션 기능을 HTML5와 JavaScript로 손쉽게 구현할 수 있도록 합니다.

### Glash의 장점

- **HTML5 표준 사용:** 모든 최신 웹 브라우저에서 지원됩니다.
- **가벼운 프레임워크:** 빠른 로딩과 실행 속도.
- **확장 가능성:** 추가 기능과 커스터마이징이 용이합니다.

## 사용 방법

1. `index.html` 파일을 열어 기본적인 사용 예제를 확인할 수 있습니다.
2. `glash@1.0.0.js` 파일을 프로젝트에 포함하여 사용합니다.

### 예제

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Glash Framework</title>
</head>
<body>
    <h1>Glash Framework</h1>
    <canvas id="glash" width="600" height="600" style="border: 1px solid black; border-radius: 5px;"></canvas>

    <script src="glash@1.0.0.js"></script>
    <script>
        canv.draw.logo();

        // Animate a circle moving across the canvas
        canv.animate.animateObject(
            function(progress) {
                const x = progress * 600;
                const y = 300;
                canv.draw.fillCircle(x, y, 20, "blue");
            }, 
            2000,  // duration
            60,    // frameRate
            true,  // clear the canvas each frame
            null   // optional clearRect array [x, y, width, height]
        );
    </script>
</body>
</html>
```

## 이벤트 리스너 사용 예제

### 클릭 이벤트

```javascript
const removeClickEvent = canv.events.onClick(function(x, y) {
    console.log("Canvas clicked at: ", x, y);
    // Draw a small circle at the click position
    canv.draw.fillCircle(x, y, 5, "red");
});
```

### 마우스 이동 이벤트

```javascript
const removeMouseMoveEvent = canv.events.onMouseMove(function(x, y) {
    console.log("Mouse moved at: ", x, y);
});
```

### 키보드 이벤트

```javascript
const removeKeyDownEvent = canv.events.onKeyDown(function(key, code) {
    console.log("Key pressed: ", key, "Code: ", code);
});

const removeKeyUpEvent = canv.events.onKeyUp(function(key, code) {
    console.log("Key released: ", key, "Code: ", code);
});
```

## 애니메이션 사용 예제

```javascript
canv.animate.animateObject(
    function(progress) {
        const x = progress * 600;
        const y = 300;
        canv.draw.fillCircle(x, y, 20, "blue");
    }, 
    2000,  // duration
    60,    // frameRate
    true,  // clear the canvas each frame
    null   // optional clearRect array [x, y, width, height]
);
```

### 애니메이션 매개변수 설명

- `drawFunc(progress)`: 애니메이션의 각 프레임에서 호출되는 함수입니다. `progress`는 0에서 1까지의 값으로 애니메이션의 진행 상태를 나타냅니다.
- `duration`: 애니메이션의 총 지속 시간(밀리초)입니다.
- `frameRate`: 초당 프레임 수입니다. 기본값은 60입니다.
- `clear`: 매 프레임마다 캔버스를 지울지 여부를 나타내는 불리언 값입니다. 기본값은 `true`입니다.
- `clearRect`: 캔버스에서 지울 영역을 나타내는 배열입니다. [x, y, width, height] 형식으로 지정합니다. 기본값은 `null`이며, 이 경우 전체 캔버스가 지워집니다.

## 기여

기여를 환영합니다! 버그 리포트, 기능 요청 또는 풀 리퀘스트를 통해 프로젝트에 기여할 수 있습니다.

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참고하십시오.# glash-project
