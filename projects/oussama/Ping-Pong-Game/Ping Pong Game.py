import turtle
import winsound
# from playsound import playsound

window = turtle.Screen()  # make a screen
window.title("Ping Pong Game")
window.bgcolor("white")
window.setup(width=800, height=600)  # resize the sceen
window.tracer(0)

# racket1
racket1 = turtle.Turtle()
racket1.speed(0)
racket1.shape("square")
racket1.shapesize(stretch_wid=5, stretch_len=1)
racket1.color("blue")
racket1.penup()
racket1.goto(-350, 0)

# racket2
racket2 = turtle.Turtle()
racket2.speed(0)
racket2.shape("square")
racket2.shapesize(stretch_wid=5, stretch_len=1)
racket2.color("red")
racket2.penup()
racket2.goto(350, 0)

# ball
ball = turtle.Turtle()
ball.speed(0)
ball.shape("square")
ball.color("black")
ball.penup()
ball.goto(0, 0)
ball.dx = 0.2
ball.dy = 0.2


# score
score1 = 0
score2 = 0
score = turtle.Turtle()
score.speed(0)
score.color("black")
score.penup()
score.hideturtle()
score.goto(0, 260)
score.write("player1 : {}  | player2 : {} ".format(
    score1, score1), align="center", font=("courrier", 15))
# function for moving


def racket1Up():
    y = racket1.ycor()
    y += 20
    racket1.sety(y)


def racket2Up():
    y = racket2.ycor()
    y += 20
    racket2.sety(y)


def racket1Down():
    y = racket1.ycor()
    y -= 20
    racket1.sety(y)


def racket2Down():
    y = racket2.ycor()
    y -= 20
    racket2.sety(y)


# moving with button

window.listen()
window.onkeypress(racket1Up, "a")
window.onkeypress(racket1Down, "q")
window.onkeypress(racket2Up, "Up")
window.onkeypress(racket2Down, "Down")

while True:
    window.update()  # make the screen update

    # moving the ball
    ball.setx(ball.xcor() + ball.dx)
    ball.sety(ball.ycor() + ball.dy)

    # stop the rackets
    if racket1.ycor() > 260:
        racket1.sety(260)
    if racket1.ycor() < -260:
        racket1.sety(-260)
    if racket2.ycor() > 260:
        racket2.sety(260)
    if racket2.ycor() < -260:
        racket2.sety(-260)
    # border check
    if ball.ycor() > 290:
        ball.sety(290)
        ball.dy *= -1
    if ball.ycor() < -290:
        ball.sety(-290)
        ball.dy *= -1
    if ball.xcor() > 390:
        ball.goto(0, 0)
        ball.dx *= -1
        score1 += 1
        score.clear()
        score.write("player1 : {}  | player2 : {} ".format(
            score1, score2), align="center", font=("courrier", 15))
    if ball.xcor() < -390:
        ball.goto(0, 0)
        ball.dx *= -1
        score2 += 1
        score.clear()
        score.write("player1 : {}  | player2 : {} ".format(
            score1, score2), align="center", font=("courrier", 15))

    if ball.xcor() > 340 and ball.xcor() < 350 and ball.ycor() < racket2.ycor() + 60 and ball.ycor() > racket2.ycor() - 60:
        winsound.PlaySound("ping.wav", winsound.SND_ASYNC | winsound.SND_ALIAS)
        ball.setx(340)
        ball.dx *= -1
    if ball.xcor() < -340 and ball.xcor() > -350 and ball.ycor() < racket1.ycor() + 60 and ball.ycor() > racket1.ycor() - 60:
        winsound.PlaySound("ping.wav", winsound.SND_ASYNC | winsound.SND_ALIAS)
        ball.setx(-340)
        ball.dx *= -1
