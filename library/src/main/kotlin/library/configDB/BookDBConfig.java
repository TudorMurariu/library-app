//package library.configDB;
//
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.boot.autoconfigure.domain.EntityScan;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Primary;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.jdbc.datasource.DataSourceBuilder;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
//import org.springframework.transaction.PlatformTransactionManager;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
//import javax.persistence.EntityManagerFactory;
//import javax.sql.DataSource;
//
//@Configuration
//@EnableTransactionManagement
//@EnableJpaRepositories(
//        basePackageClasses = library.repo.BookRepo.class, // Specify the repository class
//        entityManagerFactoryRef = "bookEntityManagerFactory",
//        transactionManagerRef = "bookTransactionManager"
//)
//public class BookDBConfig {
//
//    @Primary
//    @Bean(name = "bookDataSource")
//    @ConfigurationProperties(prefix = "spring.datasource.bookdb")
//    public DataSource bookDataSource() {
//        return DataSourceBuilder.create().build();
//    }
//
//    @Primary
//    @Bean(name = "bookEntityManagerFactory")
//    public LocalContainerEntityManagerFactoryBean bookEntityManagerFactory(
//            EntityManagerFactoryBuilder builder,
//            @Qualifier("bookDataSource") DataSource dataSource) {
//        return builder
//                .dataSource(dataSource)
//                .packages(library.domain.Book.class) // Specify the entity class
//                .persistenceUnit("bookPU")
//                .build();
//    }
//
//    @Primary
//    @Bean(name = "bookTransactionManager")
//    public PlatformTransactionManager bookTransactionManager(
//            @Qualifier("bookEntityManagerFactory") EntityManagerFactory entityManagerFactory) {
//        return new JpaTransactionManager(entityManagerFactory);
//    }
//}
