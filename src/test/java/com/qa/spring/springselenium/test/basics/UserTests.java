package com.qa.spring.springselenium.test.basics;

import com.github.javafaker.Faker;
import com.qa.spring.springselenium.basics.users.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class UserTests {

	@Autowired
	private User user;

	@Value("${path}")
	private String path;

	//Type as String
	@Value("${fruits}")
	private String fruits;

	//Type as List<String>
	@Value("${fruits}")
	private List<String> fruitsList;


	//default value injection ---> if the URL value is not present in properties the the value given will be assigned
	//If no default value is given here, then spring will throw illegalargument excpetion
	@Value("${TEST_URL:https://google.com}")
	private String url;

	@Test
	void contextLoads() {

		user.printAddress();
		System.out.println(this.path);
		System.out.println(this.fruits);
		System.out.println(this.fruitsList+" :: "+this.fruitsList.size());
		System.out.println("URL : "+url);

		//Using JAVA Faker
		Faker faker = new Faker();
		System.out.println(faker.name().firstName());
	}

}
