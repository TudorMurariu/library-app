//package library.configDB;
//
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.jdbc.datasource.DataSource
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.transaction.PlatformTransactionManager;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
//import javax.persistence.EntityManagerFactory;
//import javax.sql.DataSource;
//
//@Configuration
//@EnableTransactionManagement
//@EnableJpaRepositories(
//        basePackageClasses = library.repo.UserRepo.class, // Specify the repository class
//        entityManagerFactoryRef = "userEntityManagerFactory",
//        transactionManagerRef = "userTransactionManager"
//)
//public class UserDBConfig {
//
//    @Bean(name = "userDataSource")
//    @ConfigurationProperties(prefix = "spring.datasource.userdb")
//    public DataSource userDataSource() {
//        return DataSourceBuilder.create().build();
//    }
//
//    @Bean(name = "userEntityManagerFactory")
//    public LocalContainerEntityManagerFactoryBean userEntityManagerFactory(
//            EntityManagerFactoryBuilder builder,
//            @Qualifier("userDataSource") DataSource dataSource) {
//        return builder
//                .dataSource(dataSource)
//                .packages(library.domain.User.class) // Specify the entity class
//                .persistenceUnit("userPU")
//                .build();
//    }
//
//    @Bean(name = "userTransactionManager")
//    public PlatformTransactionManager userTransactionManager(
//            @Qualifier("userEntityManagerFactory") EntityManagerFactory entityManagerFactory) {
//        return new JpaTransactionManager(entityManagerFactory);
//    }
//}
