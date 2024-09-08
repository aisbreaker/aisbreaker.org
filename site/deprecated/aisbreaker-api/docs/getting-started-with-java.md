---
#prev:
#  text: 'Home'
#  link: '/'
#next:
#  text: 'Reference'
#  link: '/reference/'
---

Getting Started - with Java/Kotlin/JVM
======================================
We use the AIsBreaker Client API for Java/Kotlin/JVM now.

Setup
-----
Add the required dependency to your build tool:
::: code-group
```Groovy[build.gradle (Gradle)]
dependencies {
    ...
    implementation 'org.aisbreaker:aisbreaker-api-java:0.1.2'
    ...
}
```

```Kotlin[build.gradle.kts (Gradle Kotlin)]
dependencies {
    ...
    implementation("org.aisbreaker:aisbreaker-api-java:0.1.2")
    ...
}
```

```XML[pom.xml (Maven)]
<project ...>
  ...
  <dependencies>
    ...
    <dependency>
      <groupId>org.aisbreaker</groupId>
      <artifactId>aisbreaker-api-java</artifactId>
      <version>0.1.2</version>
    </dependency>
    ...
  </dependencies>
  ...
</project>
```

```Scala[build.sbt (Scala)]
...
libraryDependencies += "org.aisbreaker" % "aisbreaker-api-java" % "0.1.2"
...
```
:::


Initialize the AIsBreaker Client API
------------------------------------
Import required libraries:
::: code-group
```Java[AIsBreakerSimpleChat.java (Java app)]
import org.aisbreaker.api.*;
import org.aisbreaker.api.model.*;
```

```Kotlin[AIsBreakerSimpleChat.kt (Kotlin app)]
import org.aisbreaker.api.*
import org.aisbreaker.api.model.*
```
:::


Start definition of the main method/function, inclusive start of a try-catch block:
::: code-group
```Java[AIsBreakerSimpleChat.java (Java app)]
public class AIsBreakerSimpleChat {
  public static void main(String[] args) {
    System.out.println("AIsBreakerSimpleChat");
    System.out.println("--------------------");
            
    try {
```

```Kotlin[AIsBreakerSimpleChat.kt (Kotlin app)]
fun main() {
    println("AIsBreakerSimpleChat(kt)")
    println("------------------------")

    try {
```
:::


Select your desired service and define respective [Service Properties](./service-properties) - mainly the [serviceId](./serviceId):

::: code-group
```Java[AIsBreakerSimpleChat.java (Java app)]
        // service configuration: select the service/serviceId you want to use
        AIsServiceProps serviceProps = new AIsServiceProps()
            .setServiceId("chat:dummy")
        
            //.setServiceId("chat:openai.com")
        
            //.setServiceId("chat:gemini.vertexai.google.com")
            //.setProject("<YOUR-GOOGLE-CLOUD-PROJECT>")          // optional for gemini.vertexai.google.com
            //.setLocation("<YOUR-GOOGLE-CLOUD-LOCATION>")        // optional for gemini.vertexai.google.com, e.g. "us-central1"
        
            //.setServiceId("chat:huggingface.co/<HF-ACCOUNT>/<HF-MODEL>")
            // e.g.:
            //.setServiceId("chat:huggingface.co/microsoft/DialoGPT-large")
        
            //.setServiceId("aisbreaker:mirror")
            //.setForward2ServiceProps(new AIsServiceProps()
            //    .setServiceId("chat:echo")
            //)
        ;
```

```Kotlin[AIsBreakerSimpleChat.kt (Kotlin app)]
        // service configuration: select the service/serviceId you want to use
        val serviceProps = AIsServiceProps()
            .setServiceId("chat:dummy")

            //.setServiceId("chat:openai.com")

            //.setServiceId("chat:gemini.vertexai.google.com")
            //.setProject("<YOUR-GOOGLE-CLOUD-PROJECT>")          // optional for gemini.vertexai.google.com
            //.setLocation("<YOUR-GOOGLE-CLOUD-LOCATION>")        // optional for gemini.vertexai.google.com, e.g. "us-central1"

            //.setServiceId("chat:huggingface.co/<HF-ACCOUNT>/<HF-MODEL>")
            // e.g.:
            //.setServiceId("chat:huggingface.co/microsoft/DialoGPT-large")

            //.setServiceId("aisbreaker:mirror")
            //.setForward2ServiceProps(AIsServiceProps()
            //    .setServiceId("chat:echo")
            //)
```
:::


Set authentication secrets ([API Keys](./api-keys)), if required by your desired [service](./services):
::: code-group
```Java[AIsBreakerSimpleChat.java (Java app)]
        Auth auth = new Auth()
            // optionally, set your OpenAI API key:
            //.setSecret("sk-...")
        
            // optionally, set your Google Cloud (Vertext AI) API key:
            //.setSecret("googlecloud-account-json-base64_..")
        
            // optionally, set your Huggingface API key:
            //.setSecret("hf_...")
        
            // optionally, set your AIsBreaker API key:
            //.setSecret("aisbreaker_...")
        ;
```

```Kotlin[AIsBreakerSimpleChat.kt (Kotlin app)]
        val auth = Auth()
            // optionally, set your OpenAI API key:
            //.setSecret("sk-...")

            // optionally, set your Google Cloud (Vertext AI) API key:
            //.setSecret("googlecloud-account-json-base64_..")

            // optionally, set your Huggingface API key:
            //.setSecret("hf_...")

            // optionally, set your AIsBreaker API key:
            //.setSecret("aisbreaker_...")

```
:::
In a client-side app (e.g. Android app) read the API Key from an authentication flow or from configuration instead. But only use [AIsBreaker API Keys](aisbreaker-api-key) to never expose your AI service API key to app users.


Select the [AIsBreaker server](aisbreaker-server) to use (`null` defaults to `https://api.demo.aisbreaker.org/`) and get access to the API:
::: code-group
```Java[AIsBreakerSimpleChat.java (Java app)]
        String aisbreakerServerURL =  null;//"https://api.demo.aisbreaker.org/";

        // service initialization
        AIsService aisService =
            AIsBreaker.getAIsService(aisbreakerServerURL, serviceProps, auth); 
```

```Kotlin[AIsBreakerSimpleChat.kt (Kotlin app)]
        val aisbreakerServerURL: String? = null //"https://api.demo.aisbreaker.org/"

        // service initialization
        val aisService = 
            AIsBreaker.getAIsService(aisbreakerServerURL, serviceProps, auth)
```
:::


Use the AIsBreaker Client API
-----------------------------
Most API functions can work asynchronously with Futures.

Below we implement a simple conversation example with blocking functions: 1st request/question/prompt + 1st response/answer + 2nd request/question/prompt + 2nd response/answer.

::: code-group
```Java[AIsBreakerSimpleChat.java (Java app)]
        // 1st question/prompt
        String question1 = "What is NodeJS?";
        System.out.println("***** Question1 *****\n"+question1+"\n");
        
        // 1st answer
        ResponseFinal response1 = aisService.process(new Request()
            .addInput(new Input()
                .setText(new InputText()
                    .setRole("user")
                    .setContent(question1)
                )
            )
        );
        System.out.println("***** Answer1 *****\n"+response1.getOutputs().get(0).getText().getContent()+"\n");
        
        
        // 2nd question/prompt
        String question2 = "shorter please";
        System.out.println("***** Question2 *****\n"+question2+"\n");
        
        // 2nd answer
        ResponseFinal response2 = aisService.process(new Request()
            .addInput(new Input()
                .setText(new InputText()
                    .setRole("user")
                    .setContent(question2)
                )
            )
            .setConversationState(response1.getConversationState())
        );
        System.out.println("***** Answer2 *****\n"+response2.getOutputs().get(0).getText().getContent()+"\n");
```

```Kotlin[AIsBreakerSimpleChat.kt (Kotlin app)]
        // 1st question/prompt
        val question1 = "What is NodeJS?"
        println("***** Question1 *****\n$question1\n")

        // 1st answer
        val response1 = aisService.process(Request()
            .addInput(Input()
                .setText(InputText()
                    .setRole("user")
                    .setContent(question1)
                )
            )
        )
        println("***** Answer1 *****\n${response1.outputs[0].text.content}\n")


        // 2nd question/prompt
        val question2 = "shorter please"
        println("***** Question2 *****\n$question2\n")

        // 2nd answer
        val response2 = aisService.process(Request()
            .addInput(Input()
                .setText(InputText()
                    .setRole("user")
                    .setContent(question2)
                )
            )
            .setConversationState(response1.conversationState)
        )
        println("***** Answer2 *****\n${response2.outputs[0].text.content}\n")
```
:::

Details:
- request/question/prompt: [Request](./request)
- response/answer: [ResponseFinal and ResponseEvent](./response)


Finally, we need to catch potential `AIsError`s and finish the definition of the main method/function:

::: code-group
```Java[AIsBreakerSimpleChat.java (Java app)]
    } catch (AIsError e) {
        e.printStackTrace();
    }
  }
}
```

```Kotlin[AIsBreakerSimpleChat.kt (Kotlin app)]
    } catch (e: AIsError) {
        e.printStackTrace()
    }
}
```
:::



Examples
--------
Some example apps are available:

- **example simple 'chat'** - Java
  - source code: [aisbreaker/aisbreaker-example-simple-chat-java/](https://github.com/aisbreaker/aisbreaker-example-simple-chat-java/)

- **example simple 'chat'** - Kotlin:
  - source code: [aisbreaker/aisbreaker-example-simple-chat-kotlin/](https://github.com/aisbreaker/aisbreaker-example-simple-chat-kotlin/)
